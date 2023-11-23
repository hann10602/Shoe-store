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
    private Integer price;
    private Integer salePrice;
    private String description;
    private Integer quantity;
    private Integer averageStar;
    private List<Integer> shoeSizes;
    private List<String> imageUrls;
}
