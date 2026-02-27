package com.skillsphere.repository;

import com.skillsphere.entity.SkillNeeded;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SkillNeededRepository extends JpaRepository<SkillNeeded, Long> {
    List<SkillNeeded> findByUserId(Long userId);
}
