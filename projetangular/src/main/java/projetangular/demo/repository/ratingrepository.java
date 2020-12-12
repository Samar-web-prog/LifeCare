package projetangular.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import projetangular.demo.entity.rating;

import java.util.List;

public interface ratingrepository extends CrudRepository<rating,Integer> {
    //Pour selectionner les rating de doctor
    @Query("select r from rating r where r.doctor.id =:doctor ")
    List<rating> getRatingdocteur(@Param("doctor") int docteur);
//Pour selectionner les rating de pharmacies
    @Query("select r from rating r where r.pharmacie.id =:pharmacie ")
    List<rating> getRatingPharmacie(@Param("pharmacie") int pharmacie);

}
