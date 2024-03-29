package com.medihub.medihub.controller;

import com.medihub.medihub.model.LoginModel;
import com.medihub.medihub.service.LoginService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@CrossOrigin(maxAge = 500)
public class LoginController {
    private LoginService loginService;

    @PostMapping("login")
    public ResponseEntity<Boolean> login(@RequestBody LoginModel loginModel){
        return new ResponseEntity<>(loginService.checkLogin(loginModel), HttpStatus.OK);
    }

    @PostMapping("login-doctor")
    public ResponseEntity<Boolean> doctorLogin(@RequestBody LoginModel loginModel){
        return new ResponseEntity<>(loginService.checkLoginForDoctor(loginModel), HttpStatus.OK);
    }

}
