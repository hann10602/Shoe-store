package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.bill.CreateBillFromCartSdi;
import com.nnh.be.dto.sdi.bill.CreateBillSdi;
import com.nnh.be.dto.sdi.bill.UpdateBillSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.bill.BillSelfSdo;
import com.nnh.be.model.Bill;
import com.nnh.be.repository.BillRepository;
import com.nnh.be.repository.EvaluateRepository;
import com.nnh.be.repository.SizeRepository;
import com.nnh.be.service.BillService;
import com.nnh.be.service.CartService;
import com.nnh.be.service.ShoeService;
import com.nnh.be.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class BillServiceImpl implements BillService {
    private final BillRepository billRepo;
    private final EvaluateRepository evaluateRepo;
    private final SizeRepository sizeRepo;
    private final UserService userService;
    private final CartService cartService;
    private final ShoeService shoeService;

    @Override
    public List<BillSelfSdo> findAll() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<BillSelfSdo> dtoList = new ArrayList<>();
        List<Bill> entityList = billRepo.findAll();

        entityList.forEach(entity -> {
            BillSelfSdo dto = new BillSelfSdo();
            BeanUtils.copyProperties(entity, dto);

            dto.setShoeId(entity.getShoeOrder().getId());
            dto.setShoeName(entity.getShoeOrder().getName());
            dto.setShoeSize(entity.getSizeOrder().getName());
            dto.setCreatedDate(sdf.format(entity.getCreatedDate()));

            dtoList.add(dto);
        });

        return dtoList;
    }

    @Override
    public List<BillSelfSdo> findByUser(Long userId) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<BillSelfSdo> dtoList = new ArrayList<>();
        List<Bill> entityList = billRepo.findByUserId(userId);

        entityList.forEach(entity -> {
            BillSelfSdo dto = new BillSelfSdo();
            BeanUtils.copyProperties(entity, dto);

            dto.setShoeId(entity.getShoeOrder().getId());
            dto.setShoeName(entity.getShoeOrder().getName());
            dto.setShoeSize(entity.getSizeOrder().getName());
            dto.setCreatedDate(sdf.format(entity.getCreatedDate()));

            dtoList.add(dto);
        });

        return dtoList;
    }

    @Override
    public MessageSdo create(CreateBillSdi req) {
        try {
            Bill entity = new Bill();
            entity.setQuantity(req.getQuantity());
            entity.setSizeOrder(sizeRepo.findByCode(req.getSizeCode()).get());
            entity.setTotalPrice(req.getTotalPrice());
            entity.setUserOrder(userService.findOne(req.getUserId()));
            entity.setShoeOrder(shoeService.findOne(req.getShoeId()));
            entity.setStatus("WAIT");
            if (evaluateRepo.findByUserIdAndShoeId(req.getUserId(), req.getShoeId()).isPresent()) {
                entity.setIsEvaluate(true);
            } else {
                entity.setIsEvaluate(false);
            }
            entity.setReceived(false);

            billRepo.save(entity);

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return MessageSdo.of("Failed");
    }

    @Override
    public MessageSdo createFromCart(CreateBillFromCartSdi req) {
        try {
            cartService.findAllByIdIn(req.getCartIdList()).forEach(cart -> {
                Bill entity = new Bill();
                entity.setQuantity(cart.getQuantity());
                entity.setSizeOrder(cart.getSizeCart());
                if(cart.getShoeCart().getSalePrice() != null) {
                    entity.setTotalPrice(cart.getShoeCart().getSalePrice() * cart.getQuantity());
                } else {

                    entity.setTotalPrice(cart.getShoeCart().getPrice() * cart.getQuantity());
                }
                entity.setUserOrder(cart.getUserCart());
                entity.setShoeOrder(cart.getShoeCart());
                entity.setStatus("WAIT");
                entity.setReceived(false);
                entity.setIsEvaluate(false);

                billRepo.save(entity);
            });

            cartService.deleteAll(req.getCartIdList());

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return MessageSdo.of("Failed");
    }

    @Override
    public MessageSdo update(UpdateBillSdi req) {
        try {
            Bill entity = findOne(req.getId());
            entity.setStatus(req.getStatus());
            entity.setReceived(req.getReceived() == "true" ? true : false);
            entity.setIsEvaluate(req.getIsEvaluate());

            billRepo.save(entity);

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return MessageSdo.of("Failed");
    }

    @Override
    public MessageSdo delete(Long id) {
        try {
            billRepo.deleteById(id);

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return MessageSdo.of("Failed");
    }

    @Override
    public Bill findOne(Long id) {
        return billRepo.findById(id).get();
    }
}
