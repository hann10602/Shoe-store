package com.nnh.be.repository.impl;

import com.nnh.be.model.Size;
import com.nnh.be.repository.SizeRepositoryCustom;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class SizeRepoCustomImpl implements SizeRepositoryCustom {
    private final EntityManager em;


    @Override
    public List<Size> findAllByShoeSize(List<String> sizeCodes) {
        StringBuilder jpql = new StringBuilder();

        jpql.append("SELECT s FROM Size s WHERE s in (");

        sizeCodes.forEach((size) -> {
            jpql.append(size + ", ");
        });

        jpql.append("0)");

        Query query = em.createQuery(jpql.toString());

        List<Size> shoeSizes = query.getResultList();

        return shoeSizes;
    }
}
