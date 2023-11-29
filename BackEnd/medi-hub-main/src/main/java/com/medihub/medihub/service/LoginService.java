package com.medihub.medihub.service;

import com.medihub.medihub.entity.Doctor;
import com.medihub.medihub.entity.User;
import com.medihub.medihub.model.LoginModel;
import com.medihub.medihub.repository.DoctorRepository;
import com.medihub.medihub.repository.UserRepository;
import com.medihub.medihub.util.SecurityManager;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoginService {
    UserService userService;
    UserRepository userRepository;
    SecurityManager securityManager;
    DoctorRepository doctorRepository;

    public boolean checkLogin(LoginModel loginModel){
        User user=userRepository.findByEmail(loginModel.getUserName()).stream().findFirst().orElseThrow();
        return securityManager.checkPassword(loginModel.getPassword(),user.getPassword());
    }

    public boolean checkLoginForDoctor(LoginModel loginModel){
        Doctor doctor = doctorRepository.findByEmail(loginModel.getUserName()).stream().findFirst().orElseThrow();
        return securityManager.checkPassword(loginModel.getPassword(), doctor.getPassword());
    }
}
