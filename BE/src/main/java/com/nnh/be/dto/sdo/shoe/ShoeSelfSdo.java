package com.nnh.be.dto.sdo.shoe;

import com.nnh.be.dto.common.CommonSdo;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class ShoeSelfSdo extends CommonSdo {
    private Long id;
    private String name;
    private String price;
    private String description;
    private Long sizeId;
    private List<String> imageUrl;
}
