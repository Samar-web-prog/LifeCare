package projetangular.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetangular.demo.entity.rendezvous;
import projetangular.demo.repository.RendezVousRepository;

import java.util.List;

@Service
public class rendezvousservices {
    @Autowired
    RendezVousRepository rr;

  public List<rendezvous> getAllRendezVous(){
      return (List<rendezvous>) rr.findAll();
  }

    public List<rendezvous> getAllRendezVousDoctor(int docteur){
      return rr.getrendezvousdocteur(docteur);
    }
    public List<rendezvous> getAllRendezVousUser(int user){
      return rr.getrendezvoususer(user);
    }
    public void deleteRendezVous(int id){
      rr.deleteById(id);
    }
    public rendezvous addRendezVous(rendezvous r){
    return rr.save(r);
    }
}
