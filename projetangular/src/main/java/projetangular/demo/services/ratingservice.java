package projetangular.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetangular.demo.entity.rating;
import projetangular.demo.repository.ratingrepository;

import java.util.List;

@Service
public class ratingservice {
    @Autowired
    ratingrepository rt;
    public rating addRating(rating R){

        return rt.save(R);
    }

    public List<rating> getRatingdoctor(int doctor){
        return rt.getRatingdocteur(doctor);
    }
    public List<rating> getRatingPharmacies(int pharmacie){
        return rt.getRatingdocteur(pharmacie);
    }
    public void deleteRating(int id){
        rt.deleteById(id);
    }
    public rating updateRating(rating r){
        return rt.save(r);
    }

}
