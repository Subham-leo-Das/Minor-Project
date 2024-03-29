package com.medihub.medihub.controller;

import com.medihub.medihub.entity.Appointment;
import com.medihub.medihub.entity.Availability;
import com.medihub.medihub.entity.Doctor;
import com.medihub.medihub.service.DoctorService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin(maxAge = 500)
@RequestMapping("doctors")
public class DoctorController {

    private DoctorService doctorService;

    @GetMapping("/all")
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @GetMapping("/{id}")
    public Optional<Doctor> getDoctorById(@PathVariable Long id) {
        return doctorService.getDoctorById(id);
    }

    @PostMapping("add")
    public Doctor saveDoctor(@RequestBody Doctor doctor) {
        return doctorService.saveDoctor(doctor);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
    }

    @PostMapping("/{doctorId}/appointments")
    public Doctor scheduleAppointment(
            @PathVariable Long doctorId,
            @RequestBody Appointment appointment) {
        return doctorService.scheduleAppointment(doctorId, appointment);
    }

    @PostMapping("/{doctorId}/availabilities")
    public Doctor setDoctorAvailability(
            @PathVariable Long doctorId,
            @RequestBody Availability availability) {
        return doctorService.setDoctorAvailability(doctorId, availability);
    }

    @GetMapping("/{doctorId}/availability")
    public List<Availability> getDoctorAvailability(
            @PathVariable Long doctorId,
            @RequestParam DayOfWeek dayOfWeek) {
        return doctorService.getDoctorAvailability(doctorId, dayOfWeek);
    }

    @GetMapping("/specialization")
    public ResponseEntity<List<Doctor>> getDoctorsBySpecialization(@RequestParam(value = "name") String specializationName) {
        List<Doctor> doctors = doctorService.getDoctorsBySpecialization(specializationName);
        return new ResponseEntity<>(doctors, HttpStatus.OK);
    }


}
