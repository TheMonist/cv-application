const ExpForm = ({ exp, onInputChange, onSave}) => {
    return (
        <div>
            <form>
                <label htmlFor="company">Company:</label>
                <input 
                    type="text"
                    value={exp.company}
                    id="company"
                    onChange={(e) => onInputChange({...exp, company: e.target.value})}
                />
                <label htmlFor="position">Position:</label>
                <input 
                    type="text"
                    value={exp.position}
                    id="position"
                    onChange={(e) => onInputChange({...exp, position: e.target.value})}
                />
                <label htmlFor="startDate">Start Date:</label>
                <input 
                    type="text"
                    value={exp.startDate}
                    id="start-date"
                    onChange={(e) => onInputChange({...exp, startDate: e.target.value})}
                />
                <label htmlFor="endDate">End Date:</label>
                <input 
                    type="text"
                    value={exp.endDate}
                    id="end-date"
                    onChange={(e) => onInputChange({...exp, endDate: e.target.value})}
                />
                <label htmlFor="accomplishments"></label>
                <input 
                    type="text"
                    value={exp.accomplishments}
                    id="accomplishments"
                    onChange={(e) => onInputChange({...exp, accomplishments: e.target.value})}
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
    );
}

export default ExpForm;