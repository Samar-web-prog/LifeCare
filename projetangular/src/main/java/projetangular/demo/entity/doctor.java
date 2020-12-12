package projetangular.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity
public class doctor implements Serializable {
    /************/
    private static final long SerialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    private int cin;
    private String firstName;
    private String lastName;
    private String email;
    private String pwd;
    private Date datedeNaissance;
    private String domaine;
    private String nom_Cabinet;
    private int numTel;
    private String img;
    private String description;


    public doctor() {
    }

    public doctor(int id, int cin, String firstName, String lastName, String email, String pwd, Date datedeNaissance, String domaine, String nom_Cabinet, int numTel, String img) {
        this.id = id;
        this.cin = cin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pwd = pwd;
        this.datedeNaissance = datedeNaissance;
        this.domaine = domaine;
        this.nom_Cabinet = nom_Cabinet;
        this.numTel = numTel;
        this.img = img;
    }

    public static long getSerialVersionUID() {
        return SerialVersionUID;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCin() {
        return cin;
    }

    public void setCin(int cin) {
        this.cin = cin;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public Date getDatedeNaissance() {
        return datedeNaissance;
    }

    public void setDatedeNaissance(Date datedeNaissance) {
        this.datedeNaissance = datedeNaissance;
    }

    public String getDomaine() {
        return domaine;
    }

    public void setDomaine(String domaine) {
        this.domaine = domaine;
    }

    public String getNom_Cabinet() {
        return nom_Cabinet;
    }

    public void setNom_Cabinet(String nom_Cabinet) {
        this.nom_Cabinet = nom_Cabinet;
    }

    public int getNumTel() {
        return numTel;
    }

    public void setNumTel(int numTel) {
        this.numTel = numTel;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
