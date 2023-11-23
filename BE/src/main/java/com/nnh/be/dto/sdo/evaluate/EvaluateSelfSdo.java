package com.nnh.be.dto.sdo.evaluate;

import com.nnh.be.dto.common.CommonSdo;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class EvaluateSelfSdo extends CommonSdo {
    private Long id;
    private Integer star;
    private String evaluate;
    private String userName;
    private Date createdDate;
}
