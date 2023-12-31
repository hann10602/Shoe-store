package com.nnh.be.service;

import com.nnh.be.dto.sdi.image.CreateImageSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.model.Image;
import com.nnh.be.model.Shoe;

import java.util.List;

public interface ImageService {
    MessageSdo create(CreateImageSdi req);
    MessageSdo update(List<String> req, Shoe shoe);
    void deleteAllByShoe(Shoe shoe);
    List<String> getImageUrlsByShoeId(Long shoeId);


}
