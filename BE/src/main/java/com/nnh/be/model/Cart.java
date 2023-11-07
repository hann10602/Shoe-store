package com.nnh.be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "cart")
public class Cart extends BaseEntity{
    @Column
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userCart;

    @ManyToOne
    @JoinColumn(name = "shoe_id")
    private Shoe shoeCart;
}
