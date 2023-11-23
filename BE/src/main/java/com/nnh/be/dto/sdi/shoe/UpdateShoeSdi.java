package com.nnh.be.dto.sdi.shoe;

import com.nnh.be.model.Image;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class UpdateShoeSdi {
    private Long id;
    private String name;
    private Integer price;
    private Integer salePrice;
    private String description;
    private List<String> imageUrls;
    private List<String> sizes;
    private String category;
}
