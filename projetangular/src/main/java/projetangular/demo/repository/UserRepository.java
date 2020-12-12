package projetangular.demo.repository;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import projetangular.demo.entity.user;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<user, Integer> {

@Query("SELECT u From user u WHERE u.email=:email and u.pwd=:pwd")
List<user> getSingleUser(@Param("email") String email, @Param("pwd") String pwd);}
