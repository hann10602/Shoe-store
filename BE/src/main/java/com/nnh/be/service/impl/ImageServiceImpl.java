package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.image.CreateImageSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.model.Image;
import com.nnh.be.model.Shoe;
import com.nnh.be.repository.ImageRepository;
import com.nnh.be.service.ImageService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepo;

    @Override
    public MessageSdo create(CreateImageSdi req) {
        try {
            req.getUrls().forEach(url -> {
                Image entity = new Image();
                entity.setShoeImage(req.getShoe());
                entity.setUrl(url);

                imageRepo.save(entity);
            });

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }

    @Override
    @Transactional
    public MessageSdo update(List<String> req, Shoe shoe) {
        try {
            List<Image> currentImages = imageRepo.findAllByShoeImage(shoe);
            Map<String, Image> currentUrlsList = new HashMap<>();

            currentImages.forEach(image -> {
                currentUrlsList.put(image.getUrl(), image);
            });

            currentUrlsList.forEach((url, image) -> {
                if(!req.contains(url)) {
                    imageRepo.delete(image);
                }
            });

            req.forEach(url -> {
                if(!currentUrlsList.containsKey(url)) {
                    Image image = new Image();
                    image.setShoeImage(shoe);
                    image.setUrl(url);

                    imageRepo.save(image);
                }
            });

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }

    @Override
    public void deleteAllByShoe(Shoe shoe) {
        imageRepo.deleteAllByShoeImage(shoe);
    }
}
