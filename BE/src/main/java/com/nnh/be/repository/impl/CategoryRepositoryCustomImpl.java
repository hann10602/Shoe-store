//package com.nnh.be.repository.impl;
//
//import com.nnh.be.dto.sdo.category.CategorySelfSdo;
//import com.nnh.be.repository.CategoryRepositoryCustom;
//import jakarta.persistence.EntityManager;
//import jakarta.persistence.Query;
//import jakarta.persistence.Tuple;
//import jakarta.persistence.TupleElement;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//
//import java.lang.reflect.Constructor;
//import java.lang.reflect.Field;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Data
//@AllArgsConstructor
//public class CategoryRepositoryCustomImpl implements CategoryRepositoryCustom {
//    private final EntityManager em;
//
//    @Override
//    public List<Tuple> findAllWithStatistical() {
//        Query query = em.createNativeQuery("");
//
//        List<Tuple> tupleList = query.getResultList();
//
//        try {
//            for(Tuple sourceItem : tupleList) {
//                Constructor<?> cons = CategorySelfSdo.class.getConstructor();
//                Object target = cons.newInstance();
//
//                List<Field> superResult = new ArrayList<>(CategorySelfSdo.class.getSuperclass().getModifiers());
//                List<Field> superFilteredFields = Arrays.stream(CategorySelfSdo.class.getDeclaredFields()).collect(Collectors.toList());
//
//                superResult.addAll(superFilteredFields);
//
//                List<Field> targetFields = new ArrayList<>(superResult);
//                List<Field> filteredFields = Arrays.stream(CategorySelfSdo.class.getDeclaredFields()).collect(Collectors.toList());
//
//                targetFields.addAll(filteredFields);
//
//                for(Field targetFieldItem : targetFields) {
//                    String fieldName = targetFieldItem.getName().toLowerCase();
//                    List<TupleElement<?>> sourceFields = sourceItem.getElements();
//
//                    try {
//                        List<TupleElement<?>> collect = sourceFields.stream().filter(item -> {
//                            String sourceFieldNameRemoveUnderScore = item.getAlias().replace("_", "");
//                            return fieldName.equalsIgnoreCase(sourceFieldNameRemoveUnderScore);
//                        }).collect(Collectors.toList());
//
//                        String sourceFieldName = (collect == null ? "" : collect.get(0).getAlias());
//
//
//                    } catch(Exception e) {
//                        e.printStackTrace();
//                    }
//                }
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//        return null;
//    }
//}
