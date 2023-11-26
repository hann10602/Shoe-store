package com.nnh.be.dto.sdi.size;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

@Data
@AllArgsConstructor
public class SizeSelfSdi {
    @NotNull
    private Long shoeId;

    @NotNull
    private String sizeCode;
}
