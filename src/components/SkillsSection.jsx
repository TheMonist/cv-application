import Input from "./Input";
import Button from "./Button";
// import "..styles/SkillsSection.css";

function SkillsSection({
    skills,
    addItem,
    removeItem,
    onChange
}) {
    function addSkill() {
        const newSkill = {
            id: Math.random(),
            name: ""
        };
        addItem("skills", newSkill);
    }

    return (
        <div className="skill-section">
            <p>04 Skills</p>
            <div className="skills">
                {skills.map((skill, index) => (
                    <div key={skill.id}>
                        <Input
                            label="Skill"
                            placeholder="Skill"
                            className="skill-name"
                            value={skill.name}
                            onChange={(value) => 
                                onChange(index, "name", value, "skills"
                            )}
                        />
                        <Button 
                            label="o"
                            className="true"
                            onClick={() => {
                                removeItem("skills", skill)
                            }}
                        />
                    </div>
                ))}
            </div>
            <Button 
                label="Add skill"
                className="add-skill"
                onClick={() => {
                    addSkill();
                }}
            />
        </div>
    );
}

export default SkillsSection;