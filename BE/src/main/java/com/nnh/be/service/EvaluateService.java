package com.nnh.be.service;

import com.nnh.be.dto.sdi.evaluate.CreateEvaluateSdi;
import com.nnh.be.dto.sdi.evaluate.DeleteEvaluateSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.evaluate.EvaluateSelfSdo;

import java.util.List;

public interface EvaluateService {
    List<EvaluateSelfSdo> findByShoeId(Long shoeId);
    MessageSdo create(CreateEvaluateSdi req);
    MessageSdo delete(DeleteEvaluateSdi req);
}
