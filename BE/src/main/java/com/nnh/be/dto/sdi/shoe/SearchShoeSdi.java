package com.nnh.be.dto.sdi.shoe;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SearchShoeSdi {
    private String name;
    private Long price;
    private String description;
    private String sizeId;
}
