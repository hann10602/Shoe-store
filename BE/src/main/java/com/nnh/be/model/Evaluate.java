package com.nnh.be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "evaluate")
public class Evaluate extends BaseEntity{
    @Column
    private Integer star;
    @Column
    private String evaluate;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userEvaluate;
    @ManyToOne
    @JoinColumn(name = "shoe_id")
    private Shoe shoeEvaluate;
}
