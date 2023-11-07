package com.nnh.be.dto.sdi.shoe;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CreateShoeSdi {
    private String name;
    private String code;
    private String price;
    private String description;
    private List<String> sizes;
    private List<String> imageUrls;
    private String category;
}
