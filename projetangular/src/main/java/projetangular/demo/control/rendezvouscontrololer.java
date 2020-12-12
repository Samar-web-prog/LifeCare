package projetangular.demo.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import projetangular.demo.entity.rendezvous;
import projetangular.demo.entity.user;
import projetangular.demo.services.rendezvousservices;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class rendezvouscontrololer {
    @Autowired
    rendezvousservices rs;
    //http://localhost:8089/MVC/Angular/retrieve-rendezvous
    @GetMapping("/retrieve-rendezvous")
    @ResponseBody
    public List<rendezvous> getAllRendezVous(){

        return rs.getAllRendezVous();
    }
    //Selec rendez-vous from the doctor
//http://localhost:8089/MVC/Angular/retrieve-rendezvous-doctor/2
    @GetMapping("/retrieve-rendezvous-doctor/{doctor}")
    @ResponseBody
    public List<rendezvous> getRendezvousByDoctor(@PathVariable("doctor") int doctor){
        return rs.getAllRendezVousDoctor(doctor);
    }
    //Select rendez-vous from the user
    //http://localhost:8089/MVC/Angular/retrieve-rendezvous-user/8
    @GetMapping("/retrieve-rendezvous-user/{user}")
    @ResponseBody
    public List<rendezvous> getRendezvousByUser(@PathVariable("user") int user){
        return rs.getAllRendezVousUser(user);
    }
    //Delete Rendez-vous
    //http://localhost:8089/MVC/Angular/delete-rendez-vous/1
    @DeleteMapping("/delete-rendez-vous/{id}")
    @ResponseBody
    public void deleteRendezvous(@PathVariable("id")int id){
        rs.deleteRendezVous(id);
    }
    @PostMapping("/add-rendez-vous")
    @ResponseBody
    public rendezvous addUser(@RequestBody rendezvous r) {
    return rs.addRendezVous(r);
    }
}
