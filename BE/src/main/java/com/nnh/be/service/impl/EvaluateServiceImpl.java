package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.evaluate.CreateEvaluateSdi;
import com.nnh.be.dto.sdi.evaluate.DeleteEvaluateSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.evaluate.EvaluateSelfSdo;
import com.nnh.be.exception.MessageException;
import com.nnh.be.model.Evaluate;
import com.nnh.be.repository.BillRepository;
import com.nnh.be.repository.EvaluateRepository;
import com.nnh.be.service.EvaluateService;
import com.nnh.be.service.ShoeService;
import com.nnh.be.service.UserService;
import lombok.AllArgsConstructor;
import org.hibernate.exception.SQLGrammarException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class EvaluateServiceImpl implements EvaluateService {
    private final UserService userService;
    private final ShoeService shoeService;
    private final EvaluateRepository evaluateRepo;
    private final BillRepository billRepo;

    @Override
    public List<EvaluateSelfSdo> findByShoeId(Long shoeId) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<Evaluate> entityList = evaluateRepo.findByShoeId(shoeId);
        List<EvaluateSelfSdo> sdoList = new ArrayList<>();

        entityList.forEach(evaluate -> {
            EvaluateSelfSdo sdo = new EvaluateSelfSdo();
            BeanUtils.copyProperties(evaluate, sdo);
            sdo.setUserName(evaluate.getUserEvaluate().getFullName());
            sdo.setCreatedDate(sdf.format(evaluate.getCreatedDate()));

            sdoList.add(sdo);
        });

        return sdoList;
    }

    @Override
    public MessageSdo create(CreateEvaluateSdi req) {
        try {
            if(evaluateRepo.findByUserIdAndShoeId(req.getUserId(), req.getShoeId()).isPresent()) {
                throw new MessageException("You had evaluate");
            }

            Evaluate evaluate = new Evaluate();
            BeanUtils.copyProperties(req, evaluate);
            evaluate.setUserEvaluate(userService.findOne(req.getUserId()));
            evaluate.setShoeEvaluate(shoeService.findOne(req.getShoeId()));

            billRepo.setIsEvaluateByShoeIdAndUserId(req.getUserId(), req.getShoeId());
            evaluateRepo.save(evaluate);

            return MessageSdo.of("Success");
        } catch (SQLGrammarException e) {
            e.printStackTrace();
        }

        return MessageSdo.of("Failed");
    }

    @Override
    public MessageSdo delete(DeleteEvaluateSdi req) {
        try {
            evaluateRepo.deleteById(req.getId());

            return MessageSdo.of("Success");
        } catch (SQLGrammarException e) {
            e.printStackTrace();
        }

        return MessageSdo.of("Failed");
    }
}
