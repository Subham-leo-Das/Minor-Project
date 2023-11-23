package com.medihub.medihub.service;

import com.medihub.medihub.entity.User;
import com.medihub.medihub.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;

    public void save(User user){
        userRepository.save(user);
    }
    public List<User> getUser(){
        List<User> usr=new ArrayList<>(userRepository.findAll());
        return usr;
    }

    public void deleteUser(int id){
        userRepository.deleteById(id);
    }

    public void updateUser(int id,User user){
        if (userRepository.existsById(id)){
            user.setId(id);
            userRepository.save(user);
        }
    }
}
