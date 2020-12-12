package projetangular.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import projetangular.demo.entity.doctor;

import java.util.List;

@Repository
public interface DoctorRepository extends CrudRepository<doctor,Integer> {
    @Query("SELECT d From doctor d WHERE d.domaine like %?1% or d.firstName like %?1% or d.lastName like %?1% or d.email like %?1%")
    List<doctor> RechercheDoctors(@Param("str") String str);

}
