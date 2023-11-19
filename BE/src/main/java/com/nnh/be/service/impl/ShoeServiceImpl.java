package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.image.CreateImageSdi;
import com.nnh.be.dto.sdi.shoe.CreateShoeSdi;
import com.nnh.be.dto.sdi.shoe.DeleteShoeSdi;
import com.nnh.be.dto.sdi.shoe.SelfShoeSdi;
import com.nnh.be.dto.sdi.shoe.UpdateShoeSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.shoe.ShoeSelfSdo;
import com.nnh.be.model.Cart;
import com.nnh.be.model.Category;
import com.nnh.be.model.Shoe;
import com.nnh.be.repository.CategoryRepository;
import com.nnh.be.repository.ShoeRepository;
import com.nnh.be.repository.ShoeSizeRepository;
import com.nnh.be.service.ImageService;
import com.nnh.be.service.ShoeService;
import com.nnh.be.service.ShoeSizeService;
import com.nnh.be.service.SizeService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@AllArgsConstructor
public class ShoeServiceImpl implements ShoeService {
    private final ShoeRepository shoeRepo;
    private final CategoryRepository categoryRepo;
    private final ImageService imageService;
    private final SizeService sizeService;
    private final ShoeSizeService shoeSizeService;

    @Override
    public List<ShoeSelfSdo> findAll() {

        List<ShoeSelfSdo> dtoList = new ArrayList<>();
        shoeRepo.findAll().forEach((entity) -> {
            ShoeSelfSdo dto = new ShoeSelfSdo();
            BeanUtils.copyProperties(entity, dto);

            dtoList.add(dto);
        });

        return dtoList;
    }

    @Override
    public List<ShoeSelfSdo> findByCategory(String categoryCode) {
        Category category = categoryRepo.findByCode(categoryCode);
        List<ShoeSelfSdo> dtoList = new ArrayList<>();
        shoeRepo.findByShoeCategory(category).forEach((entity) -> {
            ShoeSelfSdo dto = new ShoeSelfSdo();
            BeanUtils.copyProperties(entity, dto);

            dtoList.add(dto);
        });

        return dtoList;
    }

    @Override
    public ShoeSelfSdo self(SelfShoeSdi req) {

        ShoeSelfSdo dto = new ShoeSelfSdo();
        BeanUtils.copyProperties(findOne(req.getId()), dto);

        return dto;
    }

    @Override
    public MessageSdo create(CreateShoeSdi req) {
        try {
            Shoe shoe = new Shoe();
            BeanUtils.copyProperties(req, shoe);

            shoe.setShoeCategory(categoryRepo.findByCode(req.getCategory()));

            shoeRepo.save(shoe);

            Shoe newShoe = shoeRepo.findByCode(req.getCode()).get();

            imageService.create(CreateImageSdi.of(req.getImageUrls(), newShoe));

            return shoeSizeService.create(newShoe, sizeService.searchByCodes(req.getSizes()));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public MessageSdo update(UpdateShoeSdi req) {
        try {
            Shoe shoe = shoeRepo.findById(req.getId()).get();
            BeanUtils.copyProperties(req, shoe);

            shoe.setPrice(req.getPrice());
            shoe.setShoeCategory(categoryRepo.findByCode(req.getCategory()));

            shoeRepo.save(shoe);

            imageService.update(req.getImageUrls(), shoe);

            return shoeSizeService.update(shoe, sizeService.searchByCodes(req.getSizes()));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    @Transactional
    public MessageSdo delete(DeleteShoeSdi req) {
        try {
            Shoe entity = findOne(req.getId());

            shoeSizeService.deleteAllByShoe(entity);

            imageService.deleteAllByShoe(entity);

            shoeRepo.deleteById(req.getId());

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Shoe findOne(Long id) {
        return shoeRepo.findById(id).get();
    }

    @Override
    public List<Shoe> findByIds(List<Long> idList) {
        return shoeRepo.findByIdIn(idList);
    }
}
