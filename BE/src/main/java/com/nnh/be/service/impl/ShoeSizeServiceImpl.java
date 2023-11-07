package com.nnh.be.service.impl;

import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.ShoeSize;
import com.nnh.be.model.Size;
import com.nnh.be.repository.ShoeSizeRepository;
import com.nnh.be.service.ShoeSizeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ShoeSizeServiceImpl implements ShoeSizeService {
    @Autowired
    private ShoeSizeRepository shoeSizeRepo;


    @Override
    public MessageSdo create(Shoe shoe, List<Size> sizes) {
        try {
            ShoeSize entity = new ShoeSize();
            entity.setShoeSize(shoe);

            sizes.forEach((size) -> {
                entity.setSizeShoe(size);
                entity.setQuantity(50);
                shoeSizeRepo.save(entity);
            });

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();

            return MessageSdo.of("Failed");
        }
    }

    @Override
    public MessageSdo update(Shoe shoe, List<Size> sizes) {
        try {
            List<ShoeSize> shoeSizeList = shoeSizeRepo.findAllByShoeId(shoe.getId());
            List<Size> shoeSizeIdList = new ArrayList<>();

            shoeSizeList.forEach(item -> {
                shoeSizeIdList.add(item.getSizeShoe());
            });

            shoeSizeList.forEach(size -> {
                if(!sizes.contains(size)) {
                    shoeSizeRepo.deleteById(size.getId());
                }
            });

            ShoeSize entity = new ShoeSize();
            entity.setShoeSize(shoe);
            sizes.forEach(size -> {
                if(!shoeSizeList.contains(size)) {
                    entity.setSizeShoe(size);
                    entity.setQuantity(50);
                    shoeSizeRepo.save(entity);
                }
            });

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();

            return MessageSdo.of("Failed");
        }
    }
}

