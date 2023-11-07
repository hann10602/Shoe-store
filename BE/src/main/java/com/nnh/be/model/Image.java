package com.nnh.be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "image")
public class Image extends BaseEntity{
    @Column
    private String url;

    @ManyToOne
    @JoinColumn(name = "shoe_id")
    private Shoe shoeImage;
}
