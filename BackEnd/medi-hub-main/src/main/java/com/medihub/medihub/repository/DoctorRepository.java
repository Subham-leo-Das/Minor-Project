package com.medihub.medihub.repository;
import com.medihub.medihub.entity.Doctor;
import com.medihub.medihub.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    List<Doctor> findBySpecializationName(String specializationName);

    List<Doctor> findByEmail(String email);

}
