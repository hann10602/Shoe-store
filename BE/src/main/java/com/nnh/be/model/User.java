package com.nnh.be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "user")
public class User extends BaseEntity{
    @Column
    private String fullName;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private String address;

    @Column
    private String email;

    @Column
    private String phoneNum;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role userRole;

    @OneToMany(mappedBy = "userCart")
    private List<Cart> carts = new ArrayList<>();

}
