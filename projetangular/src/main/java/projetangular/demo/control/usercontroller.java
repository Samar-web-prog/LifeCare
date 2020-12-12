package projetangular.demo.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import projetangular.demo.entity.user;
import projetangular.demo.services.userService;

import javax.websocket.server.PathParam;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class usercontroller {
    @Autowired
    userService us;
    //Ajouter User : http://localhost:8089/MVC/Angular/add-user
    @PostMapping("/add-user")
    @ResponseBody
    public user addUser(@RequestBody user u) {
        user user = us.addUser(u);
        return u;
    }
    //http://localhost:8089/MVC/Angular/retrieve-single-user/2
    @GetMapping("/retrieve-single-user/{id}")
    @ResponseBody
    public user getSingleUser(@PathVariable("id")int id){
        return us.connected(id);
    }
//http://localhost:8089/MVC/Angular/delete-user/2
    @DeleteMapping("/delete-user/{id}")
    @ResponseBody
    public void deleteUser(@PathVariable("id")int id){
     us.deleteUser(id);
    }
    //http://localhost:8089/MVC/Angular/modify-user/
    @PutMapping("/modify-user")
    @ResponseBody
    public user updateUser(@RequestBody user u){

        return us.updateUser(u);
    }
//http://localhost:8089/MVC/Angular/retrieve-coonected-user/samar.romdhani@espr.com/123456789
    @GetMapping("/retrieve-coonected-user/{email}/{pwd}")
    @ResponseBody
    public user getConnectedUser(@PathVariable("email") String email,@PathVariable("pwd") String pwd){
        return us.getsession(email,pwd);
    }
}
