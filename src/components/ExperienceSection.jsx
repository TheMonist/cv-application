import Input from "./Input";
import Button from "./Button";
import "../styles/ExperienceSection.css";

function ExperienceSection({
    experiences,
    addItem,
    removeItem,
    onChange,
}) {

    function addExperience() {
        const newExperience = {
            id: Math.random(),
            title: "",
            company: "",
            from: "",
            to: "",
            location: "",
            responsibilities: "",
        };
        addItem("experiences", newExperience)
    }

    return (
        <div className="experience-section">
            <p>02 Job Experience</p>
            {experiences.map((experience, index) => (
                <div key={experience.id} className="experience">
                    <div className="dates">
                        <Input 
                            label="From"
                            placeholder="From"
                            className="experience-from"
                            type="data"
                            value={experience.from}
                            onChange={(value) => 
                                onChange(index, "from", value, "experience")
                            }
                        />
                        <Input
                            label="To"
                            placeholder="To"
                            className="experience-to"
                            type="data"
                            value={experience.to}
                            onChange={(value) => 
                                onChange(index, "to", value, "experiences")
                            }
                        />
                    </div>
                    <div className="experience-details">
                        <div className="experience-title-company-location">
                            <Input
                                label="Title"
                                placeholder="Title"
                                className="experience-title"
                                value={experience.title}
                                onChange={(value) => 
                                    onChange(index, "title", value, "experiences")
                                }
                            />
                            <Input
                                label="Company"
                                placeholder="Company"
                                className="experience-company"
                                value={experience.company}
                                onChange={(value) => 
                                    onChange(index, "company", value, "experiences")
                                }
                            />
                            <Input
                                label="Location"
                                placeholder="Location"
                                className="experience-location"
                                value={experience.location}
                                onChange={(value) => 
                                    onChange(index, "location", value, "experiences")
                                }
                            />
                        </div>
                        <Input
                            rows="6"
                            maxLength="300"
                            type="textarea"
                            label="Responsibilites"
                            placeholder="Responsibilities"
                            className="experience-responsibilites"
                            value={experience.responsibilities}
                            onChange={(value) => 
                                onChange(index, "responsibilites", value, "experiences")
                            }
                        />
                    </div>
                    <Button
                        label="Remove"
                        className="remove-experience"
                        onClick={() => {
                            removeItem("experiences", experience)
                        }}
                    />
                </div>
            ))}
            <Button
                label="Add experience"
                className="add-experience"
                onClick={() => {
                    addExperience();
                }}
            />
        </div>
    );
}

export default ExperienceSection;