package com.nnh.be.dto.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class CommonSdo {
    private Long id;
    private String createdBy;
    private Date createdDate;
    private String updatedBy;
    private Date updatedDate;
}
