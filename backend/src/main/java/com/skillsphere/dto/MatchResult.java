package com.skillsphere.dto;

import com.skillsphere.entity.User;
import com.skillsphere.entity.Skill;

public class MatchResult {
    private User mentor;
    private Skill skill;
    private String level;

    public MatchResult() {}

    public MatchResult(User mentor, Skill skill, String level) {
        this.mentor = mentor;
        this.skill = skill;
        this.level = level;
    }

    public User getMentor() {
        return mentor;
    }

    public void setMentor(User mentor) {
        this.mentor = mentor;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
