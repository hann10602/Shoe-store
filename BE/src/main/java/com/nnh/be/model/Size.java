package com.nnh.be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "size")
public class Size extends BaseEntity{
    @Column
    private String name;

    @Column
    private String code;

    @OneToMany(mappedBy = "sizeShoe")
    private List<ShoeSize> sizeShoe = new ArrayList<>();
}
