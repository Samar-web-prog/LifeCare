package projetangular.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import projetangular.demo.entity.rendezvous;

import java.util.List;

@Repository
public interface RendezVousRepository extends CrudRepository<rendezvous,Integer> {
    //For selet rendez-vous with docteur
    @Query ("select r from rendezvous r where r.docteur.id =:docteur ")
    List<rendezvous> getrendezvousdocteur(@Param("docteur") int docteur);
    //For select rendez-vous with user
    @Query ("select r from rendezvous r where r.user.id =:user ")
    List<rendezvous> getrendezvoususer(@Param("user") int user);
}
