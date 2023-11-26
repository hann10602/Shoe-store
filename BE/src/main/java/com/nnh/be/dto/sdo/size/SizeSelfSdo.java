package com.nnh.be.dto.sdo.size;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

@Data
@AllArgsConstructor(staticName = "of")
public class SizeSelfSdo {
    private Integer quantity;
}
