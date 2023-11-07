package com.nnh.be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "shoe_size")
public class ShoeSize extends BaseEntity{
    @ManyToOne
    @JoinColumn(name = "shoe_id")
    private Shoe shoeSize;


    @ManyToOne
    @JoinColumn(name = "size_id")
    private Size sizeShoe;

    @Column
    private Integer quantity;
}
