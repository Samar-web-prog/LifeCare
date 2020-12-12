package projetangular.demo.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import projetangular.demo.entity.doctor;
import projetangular.demo.entity.user;
import projetangular.demo.repository.DoctorRepository;
import projetangular.demo.services.doctorService;

import java.util.List;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class doctorController {
    @Autowired
    doctorService ds;
    //http://localhost:8089/MVC/Angular/retrieve-doctors
    @GetMapping("/retrieve-doctors")
    @ResponseBody
    public List<doctor> getSingleDoctor(){
        return ds.getDoctor();
    }
    //http://localhost:8089/MVC/Angular/retrieve-single-doctor/1
    @GetMapping("/retrieve-single-doctor/{id}")
    @ResponseBody
    public doctor getSingleDoctor(@PathVariable("id")int id){

        return ds.getSingleDoctor(id);
    }
    // /http://localhost:8089/MVC/Angular/retrieve-recherche-doctor//1
    @GetMapping("/retrieve-recherche-doctor/{str}")
    @ResponseBody
    public List<doctor> rechercheDoctor(@PathVariable("str")String  str){

        return ds.rechercheDoctors(str);
    }

}
