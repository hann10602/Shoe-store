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
    private Integer price;

    @Column
    private Integer salePrice;

    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "shoeSize")
    private List<ShoeSize> shoeSizes = new ArrayList<>();

    @OneToMany(mappedBy = "shoeImage")
    private List<Image> images = new ArrayList<>();

    @OneToMany(mappedBy = "shoeCart")
    private List<Cart> carts = new ArrayList<>();

    @OneToMany(mappedBy = "shoeOrder")
    private List<Bill> orders = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category shoeCategory;

    @OneToMany(mappedBy = "shoeEvaluate")
    private List<Evaluate> evaluates = new ArrayList<>();

}
