package com.nnh.be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "category")
public class Category extends BaseEntity{
    @Column
    private String name;

    @Column
    private String code;

    @OneToMany(mappedBy = "shoeCategory")
    private List<Shoe> shoes = new ArrayList<>();
}
