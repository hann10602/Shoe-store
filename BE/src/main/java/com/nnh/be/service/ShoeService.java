package com.nnh.be.service;

import com.nnh.be.dto.sdi.shoe.CreateShoeSdi;
import com.nnh.be.dto.sdi.shoe.DeleteShoeSdi;
import com.nnh.be.dto.sdi.shoe.SelfShoeSdi;
import com.nnh.be.dto.sdi.shoe.UpdateShoeSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.shoe.ShoeSelfSdo;
import com.nnh.be.dto.sdo.user.UserSelfSdo;
import com.nnh.be.model.Cart;
import com.nnh.be.model.Shoe;

import java.util.List;
public interface ShoeService {
    List<ShoeSelfSdo> findAll();
    List<ShoeSelfSdo> findByCategory(String categoryCode);
    ShoeSelfSdo self(SelfShoeSdi req);
    MessageSdo create(CreateShoeSdi req);
    MessageSdo update(UpdateShoeSdi req);
    MessageSdo delete(DeleteShoeSdi req);
    Shoe findOne(Long id);
    List<Shoe> findByIds(List<Long> idList);
}
