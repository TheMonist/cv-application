import { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid"

import Education from "./Education";

const EducationSection = () => {
    const [addOption, setAddOption] = useState(false);
    const storedEdu = JSON.parse(localStorage.getItem('edus'));

    const [edus, setEdus] = useState(
        storedEdu || [
            {
                key: uuidv4(),
                school: 'School Name',
                degree: 'Degree',
                study: 'Field of Study',
                startDate: 'Start Date',
                endDate: 'End Date',
                accomplishments: 'List of Accomplishments',
            },
        ]
    );

    useEffect(() => {
        localStorage.setItem('edus', JSON.stringify(edus));
    }, [edus]);

    function addEdus() {
        setEdus((prevEdus) => [
            ...prevEdus,
            {
                key: uuidv4(),
                school: 'School Name',
                degree: 'Degree',
                study: 'Field of Study',
                startDate: 'Start Date',
                endDate: 'End Date',
                accomplishments: 'List of Accomplishments',
            },
        ]);
    }

    const handleRemoveEdu = (eduKey) => {
        const updatedEdus = edus.filter((edu) => edu.key !== eduKey);
        setEdus(updatedEdus)
    };

    const handleSaveEdu = (updatedEdu) => {
        setEdus((prevEdus) =>
            prevEdus.map((edu) => 
                edu.key === updatedEdu.key
                ? {
                    ...edu,
                    school: updatedEdu.school,
                    degree: updatedEdu.degree,
                    study: updatedEdu.study,
                    startDate: updatedEdu.startDate,
                    endDate: updatedEdu.endDate,
                    accomplishments: updatedEdu.accomplishments,
                }
                : edu
            ) 
        );
    };

    return (
        <div className="edu">
            <div
                onMouseEnter={() => {
                    setAddOption(true);
                }}
                onMouseLeave={() => {
                    setAddOption(false);
                }}
                className="section-header"
            >
                Education
                {addOption ? (
                    <div className="add-option">
                        <button className="add-button" onClick={addEdus}>
                            Add New Education
                        </button>
                    </div>
                ) : null}
            </div>
            <div>
                {edus.map((edu) => (
                    <Education 
                        key={edu.key}
                        edu={edu}
                        onDelete={() => handleRemoveEdu(edu.key)}
                        onSaveEdu={(updatedEdu) => 
                            handleSaveEdu({
                                ...edu,
                                school: updatedEdu.school,
                                degree: updatedEdu.degree,
                                study: updatedEdu.study,
                                startDate: updatedEdu.startDate,
                                endDate: updatedEdu.endDate,
                                accomplishments: updatedEdu.accomplishments
                            })
                        }
                        isNew={
                            edu.school === "School Name" &&
                            edu.degree === "Degree" &&
                            edu.study === "Field of Study" &&
                            edu.startDate === "Start Date" &&
                            edu.endDate === "End Date" &&
                            edu.accomplishments === "List of Accomplishments"
                        }    
                    />
                ))}
            </div>
        </div>
    );
};

export default EducationSection;