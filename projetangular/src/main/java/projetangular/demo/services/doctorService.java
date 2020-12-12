package projetangular.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetangular.demo.entity.doctor;
import projetangular.demo.repository.DoctorRepository;

import java.util.List;

@Service
public class doctorService {
    @Autowired
    DoctorRepository dr;
    public List<doctor> getDoctor(){
       return (List<doctor>) dr.findAll();
    }
    public doctor getSingleDoctor(int id) {
        doctor doct=dr.findById(id).get();
        return doct;

    }
    public List<doctor> rechercheDoctors(String str){
        return dr.RechercheDoctors(str);
    }

}
