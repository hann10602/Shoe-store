package com.nnh.be.dto.sdi.evaluate;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class CreateEvaluateSdi {
    private Integer star;
    private String evaluate;
    private Long userId;
    private Long shoeId;
}
