package projetangular.demo.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import projetangular.demo.entity.pharmacie;
import projetangular.demo.services.pharmacieService;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class pharmciecontroller {
    @Autowired
    pharmacieService ps;
    //http://localhost:8089/MVC/Angular/retrieve-pharmacies
    @GetMapping("/retrieve-pharmacies")
    @ResponseBody
    public List<pharmacie> GetAllPharmacies(){
        return ps.getAllpHarmacicies();
    }
    @GetMapping("/retrieve-Pharmacie-type/{type}")
    @ResponseBody
    public List<pharmacie> getpharmacieType(@PathVariable("type")String type){
        return ps.getPharmacieParType(type);
    }
}
