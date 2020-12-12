package projetangular.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.stereotype.Service;
import projetangular.demo.entity.user;
import projetangular.demo.repository.UserRepository;

@Service
public class userService {
    @Autowired
    UserRepository ur;
public user addUser(user user){

    return  ur.save(user);

}

public user connected(int id){
    user u=ur.findById(id).get();
    return u;
}
public void deleteUser(int id){
     ur.deleteById(id);
}
public user updateUser(user u){

    return ur.save(u);
}

public user getsession(String email,String pwd){
        return ur.getSingleUser(email,pwd).get(0);
    }
}