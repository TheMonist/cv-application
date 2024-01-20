import Input from "./Input";
import "../styles/SummarySection.css";

function Summary({ onFieldChange, summary }) {
    return (
        <div>
            <p>01 Professional Summary</p>
            <Input 
                label="Summary"
                placeholder="Summary of your experience"
                className="summary"
                type="textarea"
                rows="4"
                maxLength="300"
                value={summary}
                onChange={(value) => 
                    onFieldChange("summary", value)
                }
            />
        </div>
    );
}

export default Summary;