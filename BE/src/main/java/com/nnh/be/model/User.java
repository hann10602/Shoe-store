package com.nnh.be.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "user")
public class User extends BaseEntity implements UserDetails {
    @Column
    private String avatar;
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
    @OneToMany(mappedBy = "userOrder")
    private List<Bill> orders = new ArrayList<>();

    @OneToMany(mappedBy = "userEvaluate")
    private List<Evaluate> evaluates = new ArrayList<>();

    public List<GrantedAuthority> convertRoles(List<Role> oldRoles) {
        List<GrantedAuthority> newRoles = new ArrayList<>();
        for(Role role : oldRoles) {
            newRoles.add(new SimpleGrantedAuthority(role.getName()));
        }

        return newRoles;
    }

    public List<GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
