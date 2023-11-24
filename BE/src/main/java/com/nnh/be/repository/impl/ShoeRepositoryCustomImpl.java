package com.nnh.be.repository.impl;

import com.nnh.be.dto.sdo.shoe.ShoeSelfSdo;
import com.nnh.be.repository.ShoeRepositoryCustom;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import lombok.AllArgsConstructor;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
public class ShoeRepositoryCustomImpl implements ShoeRepositoryCustom {
    @PersistenceContext
    private final EntityManager em;
    @Override
    public List<ShoeSelfSdo> search(String search, String size, String category, Integer from, Integer to) {
        Map<String, Object> queryParams = new HashMap<>();
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT s.* FROM `vmo-project`.shoe s INNER JOIN `vmo-project`.category c ON c.id = s.category_id ");

        if(size != null) {
            sql.append("INNER JOIN (SELECT ss.* FROM `vmo-project`.shoe_size ss INNER JOIN `vmo-project`.size s ON ss.size_id = s.id WHERE s.code = :size) ss ON sh.id = ss.shoe_id ");
            queryParams.put("size", size);
        }

        sql.append("WHERE 1 = 1 ");


        if(search != null) {
            sql.append("AND s.name like :search");
            queryParams.put("search", "'%" + search + "%'");
        }
        if(category != null) {
            sql.append("AND c.code like :category");
            queryParams.put("category", category);
        }
        if(search != null) {
            sql.append("AND s.price > :from");
            queryParams.put("from", from);
        }
        if(search != null) {
            sql.append("AND s.price < :to");
            queryParams.put("to", to);
        }

        Query query = em.createNativeQuery(sql.toString());

        queryParams.forEach((key, value) -> {
            query.setParameter(key, value);
        });

        List<ShoeSelfSdo> shoeList = query.getResultList();

        return shoeList;
    }
}
