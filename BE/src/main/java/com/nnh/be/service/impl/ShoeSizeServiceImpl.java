package com.nnh.be.service.impl;

import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.ShoeSize;
import com.nnh.be.model.Size;
import com.nnh.be.repository.ShoeSizeRepository;
import com.nnh.be.service.ShoeSizeService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class ShoeSizeServiceImpl implements ShoeSizeService {
    private final ShoeSizeRepository shoeSizeRepo;


    @Override
    public MessageSdo create(Shoe shoe, List<Size> sizes) {
        try {
            sizes.forEach((size) -> {
                ShoeSize entity = new ShoeSize();
                entity.setShoeSize(shoe);
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
    @Transactional
    public MessageSdo update(Shoe shoe, List<Size> sizes) {
        try {
            List<ShoeSize> shoeSizeList = shoeSizeRepo.findAllByShoeSize(shoe);
            Map<Size, Long> shoeSizeIdList = new HashMap<>();

            shoeSizeList.forEach(item -> {
                shoeSizeIdList.put(item.getSizeShoe(), item.getId());
            });

            shoeSizeIdList.forEach((size, id) -> {
                if(!sizes.contains(size)) {
                    shoeSizeRepo.deleteById(id);
                }
            });

            sizes.forEach(size -> {
                if(!shoeSizeIdList.containsKey(size)) {
                    ShoeSize entity = new ShoeSize();
                    entity.setShoeSize(shoe);
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

    @Override
    public void deleteAllByShoe(Shoe shoe) {
        shoeSizeRepo.deleteAllByShoeSize(shoe);
    }

    @Override
    public List<Integer> getSizesByShoeId(Long shoeId) {
        return shoeSizeRepo.getSizesByShoeId(shoeId);
    }
}

