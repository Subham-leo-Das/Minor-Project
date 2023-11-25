package com.medihub.medihub.controller;
import java.util.List;
import java.util.Optional;

import com.medihub.medihub.entity.Appointment;
import com.medihub.medihub.entity.User;
import com.medihub.medihub.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("users")
@CrossOrigin(maxAge = 500)
public class UserController {
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("add")
    public void saveUser(@RequestBody User user) {
        userService.saveUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @PostMapping("/{userId}/appointments")
    public User scheduleAppointment(
            @PathVariable Long userId,
            @RequestBody Appointment appointment) {
        return userService.scheduleAppointment(userId, appointment);
    }
}

