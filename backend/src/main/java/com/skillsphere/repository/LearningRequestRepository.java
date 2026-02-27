package com.skillsphere.repository;

import com.skillsphere.entity.LearningRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LearningRequestRepository extends JpaRepository<LearningRequest, Long> {
    List<LearningRequest> findByLearnerId(Long learnerId);
    List<LearningRequest> findByMentorId(Long mentorId);
    List<LearningRequest> findByLearnerIdOrMentorId(Long learnerId, Long mentorId);
}
