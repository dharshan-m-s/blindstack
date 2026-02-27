package com.skillsphere.repository;

import com.skillsphere.entity.SkillOffered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SkillOfferedRepository extends JpaRepository<SkillOffered, Long> {
    List<SkillOffered> findByUserId(Long userId);
    List<SkillOffered> findBySkillId(Long skillId);
}
