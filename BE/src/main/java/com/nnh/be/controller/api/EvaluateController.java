package com.nnh.be.controller.api;

import com.nnh.be.dto.sdi.evaluate.CreateEvaluateSdi;
import com.nnh.be.dto.sdi.evaluate.DeleteEvaluateSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.evaluate.EvaluateSelfSdo;
import com.nnh.be.service.EvaluateService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/evaluate")
@CrossOrigin
public class EvaluateController {
    private final EvaluateService evaluateService;

    @GetMapping("/get-by-shoe-id/{shoeId}")
    public List<EvaluateSelfSdo> findByCategory(@PathVariable(value = "shoeId", required = true) Long shoeId) {
        return evaluateService.findByShoeId(shoeId);
    }

    @PostMapping("/create")
    public MessageSdo create(@RequestBody CreateEvaluateSdi req) {
        return evaluateService.create(req);
    }

    @DeleteMapping("/delete")
    public MessageSdo delete(@RequestBody DeleteEvaluateSdi req) {
        return evaluateService.delete(req);
    }
}
