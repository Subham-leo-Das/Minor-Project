package com.medihub.medihub.controller;
import java.util.List;
import com.medihub.medihub.entity.User;
import com.medihub.medihub.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
@AllArgsConstructor
@CrossOrigin(maxAge = 500)
public class UserController {

    private UserService userService;
    @PostMapping("add")
    public void addUser(@RequestBody User user){
        userService.save(user);
    }
    @GetMapping("get")

    public List<User> getUser(){return userService.getUser();}

    @DeleteMapping("delete/{id}")
    public void deleteUser(@PathVariable int id){
        userService.deleteUser(id);
    }

    @PutMapping("update/{id}")
    public void updateUser(@PathVariable int id,@RequestBody User user){
        userService.updateUser(id,user);
    }
}


