package com.nnh.be.dto.sdi.image;

import com.nnh.be.model.Shoe;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor(staticName = "of")
public class CreateImageSdi {
    private List<String> urls;
    private Shoe shoe;
}
