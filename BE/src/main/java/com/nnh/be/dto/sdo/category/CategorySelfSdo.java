package com.nnh.be.dto.sdo.category;

import com.nnh.be.dto.common.CommonSdo;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CategorySelfSdo extends CommonSdo {
    private String name;
    private String code;
}
