package com.nnh.be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "bill")
public class Bill extends BaseEntity{
    @Column
    private Integer quantity;
    @Column
    private Boolean received;
    @Column
    private Boolean isEvaluate;
    @Column
    private String status;
    @Column
    private Integer totalPrice;

    @ManyToOne
    @JoinColumn(name = "size_id")
    private Size sizeOrder;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userOrder;

    @ManyToOne
    @JoinColumn(name = "shoe_id")
    private Shoe shoeOrder;
}
