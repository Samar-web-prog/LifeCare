package projetangular.demo.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import projetangular.demo.entity.rating;
import projetangular.demo.services.ratingservice;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ratingcontroller {
    @Autowired
    ratingservice rs;
    //http://localhost:8089/MVC/Angular/add-rating/
    @PostMapping("/add-rating")
    @ResponseBody
    public rating addRating(@RequestBody rating r){
        return rs.addRating(r);

    }
    //http://localhost:8089/MVC/Angular/retrieve-rating-doctor/6
    @GetMapping("/retrieve-rating-doctor/{doctor}")
    @ResponseBody
    public List<rating> getdoctorrating(@PathVariable("doctor") int doctor){
        return rs.getRatingdoctor(doctor);
    }
    @GetMapping("/retrieve-rating-pharmacies/{pharmacies}")
    @ResponseBody
    public List<rating> getpharmaciesrating(@PathVariable("pharmacies") int pharmacies){
        return rs.getRatingPharmacies(pharmacies);
    }
    @DeleteMapping("/delete-comments/{id}")
    @ResponseBody
    public void deletComment(@PathVariable("id")int id){
        rs.deleteRating(id);
    }
    @PutMapping("/modify-rating")
    @ResponseBody
    public rating updateComments(@RequestBody rating r){
        return rs.updateRating(r);
    }

}
