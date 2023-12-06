import { useEffect, useState} from "react";
import ExpForm from "./ExpForm";

const Experience = () => {
    const [exp, setExperience] = useState(initialExp);

    useEffect(() => {
        setExperience(initialExp);
    }, [initialExp]);

    const [editOption, setEditOption] = useState(false);
    const [editForm, setEditForm] = useState(isNew);

    return (
        <div>
            <div
                onMouseEnter={() => {
                    if(!editForm) {
                        setEditOption(true);
                    }
                }}
                onMouseLeave={() => {
                    setEditOption(false);
                }}
                className="exp"
            >
                <div className="top">
                    <div>
                        <div className="entry-header">{exp.company}</div>
                    </div>
                    <div>{exp.startDate} - {exp.endDate}</div>
                </div>
                <div className="study">
                    <div className="position">{exp.position}</div>
                </div>
                <div>{exp.accomplishments}</div>
                {editOption ? (
                    <div className="entry-options">
                        <button
                            className="edit-button"
                            onClick={() => {
                                setEditForm(true);
                            }}
                        >
                            Edit Entry
                        </button>
                        <button className="delete-button" onClick={onDelete}>
                            Delete Entry
                        </button>
                    </div>
                ) : null}
            </div>
            {editForm ? (
                <ExpForm 
                    exp={exp}
                    onInputChange={setExperience}
                    onSave={() => {
                        setEditForm(false);
                        onSaveExp(exp);
                    }}
                />
            ) : null}
        </div>
    );
}

export default Experience;