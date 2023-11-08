package com.nnh.be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "shoe")
public class Shoe extends BaseEntity{
    @Column
    private String name;

    @Column
    private String code;

    @Column
    private Long price;

    @Column
    private String description;

    @OneToMany(mappedBy = "shoeSize")
    private List<ShoeSize> shoeSizes = new ArrayList<>();

    @OneToMany(mappedBy = "shoeImage")
    private List<Image> image;

    @OneToMany(mappedBy = "shoeCart")
    private List<Cart> carts = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category shoeCategory;

}