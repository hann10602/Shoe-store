package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.image.CreateImageSdi;
import com.nnh.be.dto.sdi.shoe.CreateShoeSdi;
import com.nnh.be.dto.sdi.shoe.SelfShoeSdi;
import com.nnh.be.dto.sdi.shoe.UpdateShoeSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.shoe.ShoeSelfSdo;
import com.nnh.be.model.Category;
import com.nnh.be.model.Image;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.ShoeSize;
import com.nnh.be.repository.*;
import com.nnh.be.service.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ShoeServiceImpl implements ShoeService {
    private final ShoeRepository shoeRepo;
    private final ImageService imageService;
    private final SizeService sizeService;
    private final ShoeSizeService shoeSizeService;
    private final CartRepository cartRepo;
    private final BillRepository billRepo;
    private final EvaluateRepository evaluateRepo;
    private final CategoryRepository categoryRepo;

    @Override
    public List<ShoeSelfSdo> findAll() {
        List<ShoeSelfSdo> dtoList = new ArrayList<>();
        shoeRepo.findAll().forEach((entity) -> {
            ShoeSelfSdo dto = new ShoeSelfSdo();
            BeanUtils.copyProperties(entity, dto);
            dto.setCategory(entity.getShoeCategory().getCode());
            dto.setQuantity(shoeSizeService.getTotalQuantityByShoeId(entity.getId()));
            dto.setShoeSizes(shoeSizeService.getSizesByShoeId(entity.getId()));
            dto.setAverageStar(evaluateRepo.getAverageStarByShoeId(entity.getId()));
            dto.setImageUrls(imageService.getImageUrlsByShoeId(entity.getId()));

            dtoList.add(dto);
        });

        return dtoList;
    }

    @Override
    public List<ShoeSelfSdo> findByCategory(String categoryCode) {
        Category category = categoryRepo.findByCode(categoryCode).get();
        List<ShoeSelfSdo> dtoList = new ArrayList<>();
        shoeRepo.findByShoeCategory(category).forEach((entity) -> {
            ShoeSelfSdo dto = new ShoeSelfSdo();
            BeanUtils.copyProperties(entity, dto);
            dto.setQuantity(shoeSizeService.getTotalQuantityByShoeId(entity.getId()));
            dto.setShoeSizes(shoeSizeService.getSizesByShoeId(entity.getId()));
            dto.setAverageStar(evaluateRepo.getAverageStarByShoeId(entity.getId()));
            dto.setImageUrls(imageService.getImageUrlsByShoeId(entity.getId()));

            dtoList.add(dto);
        });

        return dtoList;
    }

    @Override
    public ShoeSelfSdo self(SelfShoeSdi req) {
        ShoeSelfSdo dto = new ShoeSelfSdo();
        Shoe entity = findOne(req.getId());

        BeanUtils.copyProperties(entity, dto);
        dto.setCategory(entity.getShoeCategory().getCode());
        dto.setShoeSizes(shoeSizeService.getSizesByShoeId(entity.getId()));
        dto.setAverageStar(evaluateRepo.getAverageStarByShoeId(entity.getId()));
        dto.setImageUrls(entity.getImages().stream().map(image ->  image.getUrl()).toList());

        return dto;
    }

    @Override
    public List<ShoeSelfSdo> search(String search, String size, String category, Integer from, Integer to) {

        return shoeRepo.search(search, size, category, from, to);
    }

    @Override
    public MessageSdo create(CreateShoeSdi req) {
        try {
            Shoe shoe = new Shoe();
            BeanUtils.copyProperties(req, shoe);

            shoe.setShoeCategory(categoryRepo.findByCode(req.getCategory()).get());

            Shoe newShoe = shoeRepo.save(shoe);

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

            shoe.setShoeCategory(categoryRepo.findByCode(req.getCategory()).get());

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
    public MessageSdo delete(Long id) {
        try {
            Shoe entity = findOne(id);

            shoeSizeService.deleteAllByShoe(entity);
            imageService.deleteAllByShoe(entity);
            billRepo.deleteByShoeOrder(entity);
            cartRepo.deleteByShoeCart(entity);
            evaluateRepo.deleteByShoeEvaluate(entity);

            shoeRepo.deleteById(id);

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
