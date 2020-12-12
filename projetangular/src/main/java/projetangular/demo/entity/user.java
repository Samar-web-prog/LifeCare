package projetangular.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity
public class user implements Serializable {

    /************/
    private static final long SerialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id ;
    private int cin;
    private String firstName;
    private String lastName;
    private String email;
    private String pwd;
    private Date datedeNaissance;
    private int numTel;

    public user(int cin, String firstName, String lastName, String email, String pwd, Date datedeNaissance, int numTel) {
        this.cin = cin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pwd = pwd;
        this.datedeNaissance = datedeNaissance;
        this.numTel = numTel;
    }

    public user() {
    }

    public user(int id, int cin, String firstName, String lastName, String email, String pwd, Date datedeNaissance, int numTel) {
        this.id = id;
        this.cin = cin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pwd = pwd;
        this.datedeNaissance = datedeNaissance;
        this.numTel = numTel;
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

    public int getNumTel() {
        return numTel;
    }

    public void setNumTel(int numTel) {
        this.numTel = numTel;
    }
}
