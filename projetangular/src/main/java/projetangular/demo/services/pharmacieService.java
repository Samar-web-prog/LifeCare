package projetangular.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetangular.demo.entity.pharmacie;
import projetangular.demo.repository.PharmacieRepository;

import java.util.List;

@Service
public class pharmacieService {
    @Autowired
    PharmacieRepository ps;

    public List<pharmacie> getAllpHarmacicies(){
        return (List<pharmacie>) ps.findAll();
    }
    public List<pharmacie> getPharmacieParType(String type){
        return ps.getPharmaciePartype(type);
    }
}
