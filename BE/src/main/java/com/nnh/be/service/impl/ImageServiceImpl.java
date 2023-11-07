package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.image.CreateImageSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.model.Image;
import com.nnh.be.model.Shoe;
import com.nnh.be.repository.ImageRepository;
import com.nnh.be.service.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageServiceImpl implements ImageService {
    @Autowired
    private ImageRepository imageRepo;

    @Override
    public MessageSdo create(CreateImageSdi req) {
        try {
            Image entity = new Image();
            entity.setShoeImage(req.getShoe());
            req.getUrls().forEach(url -> {
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
    public MessageSdo update(List<String> req, Shoe shoe) {
        try {
            deleteAllByShoeId(shoe.getId());

            Image entity = new Image();
            entity.setShoeImage(shoe);
            req.forEach(url -> {
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
    public void deleteAllByShoeId(Long id) {
//        imageRepo.deleteAllByShoeId(id);
    }
}
