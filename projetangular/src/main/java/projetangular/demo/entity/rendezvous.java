package projetangular.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity

public class rendezvous implements Serializable {
    /************/
    private static final long SerialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    private String nompatient;
    private String prenompatient;
    private Date date;
    private String description;
    ///Jointur docteur
    private String etatRendezvous;
    private String jour;
    private String temp;
    @OneToOne
    private doctor docteur;
    @OneToOne
    private user user;



    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }

    public String getNompatient() {
        return nompatient;
    }

    public void setNompatient(String nompatient) {
        this.nompatient = nompatient;
    }

    public String getPrenompatient() {
        return prenompatient;
    }

    public void setPrenompatient(String prenompatient) {
        this.prenompatient = prenompatient;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEtatRendezvous() {
        return etatRendezvous;
    }

    public void setEtatRendezvous(String etatRendezvous) {
        this.etatRendezvous = etatRendezvous;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getJour() {
        return jour;
    }

    public void setJour(String jour) {
        this.jour = jour;
    }

    public String getTemp() {
        return temp;
    }

    public void setTemp(String temp) {
        this.temp = temp;
    }

    public doctor getDocteur() {
        return docteur;
    }

    public void setDocteur(doctor docteur) {
        this.docteur = docteur;
    }

    public projetangular.demo.entity.user getUser() {
        return user;
    }

    public void setUser(projetangular.demo.entity.user user) {
        this.user = user;
    }
}
