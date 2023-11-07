package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.image.CreateImageSdi;
import com.nnh.be.dto.sdi.shoe.CreateShoeSdi;
import com.nnh.be.dto.sdi.shoe.DeleteShoeSdi;
import com.nnh.be.dto.sdi.shoe.SelfShoeSdi;
import com.nnh.be.dto.sdi.shoe.UpdateShoeSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.shoe.ShoeSelfSdo;
import com.nnh.be.model.Shoe;
import com.nnh.be.repository.CategoryRepository;
import com.nnh.be.repository.ShoeRepository;
import com.nnh.be.service.ImageService;
import com.nnh.be.service.ShoeService;
import com.nnh.be.service.ShoeSizeService;
import com.nnh.be.service.SizeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ShoeServiceImpl implements ShoeService {
    @Autowired
    private ShoeRepository shoeRepo;

    @Autowired
    private CategoryRepository categoryRepo;

    @Autowired
    private ImageService imageService;

    @Autowired
    private SizeService sizeService;

    @Autowired
    private ShoeSizeService shoeSizeService;

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
    public MessageSdo delete(DeleteShoeSdi req) {
        try {
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
}
