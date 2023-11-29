const EduForm = ({edu, onInputChange, onSave}) => {
    return (
        <div className='form-div'>
            <form>
                <label htmlFor="school">School:</label>
                <input 
                    type="text" 
                    value={edu.school}
                    onChange={(e) => onInputChange({...edu, school: e.target.value})}
                />
                <label htmlFor="degree">Degree:</label>
                <input 
                    type="text"
                    value={edu.degree} 
                    onChange={(e) => onInputChange({...edu, degree: e.target.target})}
                />
                <label htmlFor="study">Study:</label>
                <input 
                    type="text"
                    value={edu.study}
                    onChange={(e) => onInputChange({...edu, study: e.target.value})} 
                />
                <label htmlFor="startDate">Start Date:</label>
                <input 
                    type="text" 
                    value={edu.startDate}
                    onChange={(e) => onInputChange({...edu, startDate: e.target.value})}
                />
                <label htmlFor="endDate">End Date:</label>
                <input 
                    type="text"
                    value={edu.endDate}
                    onChange={(e) => onInputChange({...edu, endDate: e.target.value})} 
                />
                <label htmlFor="accomplishments">List of Accomplishments:</label>
                <input 
                    type="text"
                    value={edu.accomplishments}
                    onChange={(e) => onInputChange({...edu, accomplishments: e.target.value})}
                />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onSave(false);
                    }}
                >
                    Save Changes
                </button>
            </form>
        </div>
    )
}

export default EduForm;