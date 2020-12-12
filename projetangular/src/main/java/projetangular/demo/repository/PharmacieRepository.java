package projetangular.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import projetangular.demo.entity.pharmacie;

import java.util.List;

@Repository
public interface PharmacieRepository extends CrudRepository<pharmacie,Integer> {
    //Pour retourner la liste des pharmacie selon pharmacie de nuit ou de jour
    @Query("select p from pharmacie p where p.type =:type")
    List<pharmacie> getPharmaciePartype(@Param("type")String type);

}
