package projetangular.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
@Entity
public class rating implements Serializable {
    /************/
    private static final long SerialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    private String comments;
    @OneToOne
    private user user;
    @OneToOne
    private doctor doctor;
    @OneToOne
    private pharmacie pharmacie;
    private int nomber;

    public rating(int id, String comments, projetangular.demo.entity.user user, projetangular.demo.entity.doctor doctor, projetangular.demo.entity.pharmacie pharmacie) {
        this.id = id;
        this.comments = comments;
        this.user = user;
        this.doctor = doctor;
        this.pharmacie = pharmacie;
    }

    public rating() {
    }

    public int getNomber() {
        return nomber;
    }

    public void setNomber(int nomber) {
        this.nomber = nomber;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public projetangular.demo.entity.user getUser() {
        return user;
    }

    public void setUser(projetangular.demo.entity.user user) {
        this.user = user;
    }

    public projetangular.demo.entity.doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(projetangular.demo.entity.doctor doctor) {
        this.doctor = doctor;
    }

    public projetangular.demo.entity.pharmacie getPharmacie() {
        return pharmacie;
    }

    public void setPharmacie(projetangular.demo.entity.pharmacie pharmacie) {
        this.pharmacie = pharmacie;
    }
}
