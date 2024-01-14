import { useState, useEffect } from "react";
import "../styles/Input.css";

function Input({
    label,
    placeholder,
    onChange,
    className,
    type,
    rows,
    maxLength,
    value,
}) {
    const [fieldValue, setFieldValue] = useState(value);

    useEffect(() => {
        setFieldValue(value);
    }, [value])

    function handleInputChange(e) {
        setFieldValue(e.target.value);
        onChange(e.target.value);
    }

    function handleTextAreaChange(e) {
        setFieldValue(e.target.value);
        onChange(e.target.value);
        if (e.target.scrollHeight > 75) {
            e.target.style.height = `${e.target.scrollHeight}px`;
        }
    }

    if (type === "textarea") {
        return (
            <div className={className}>
                <textarea
                    value={fieldValue}
                    placeholder={placeholder}
                    onChange={handleTextAreaChange}
                    rows={rows}
                    maxLength={maxLength}
                ></textarea>
            </div>
        );
    }

    return (
        <div className={className}>
            <input 
                type={type || "text"}
                value={fieldValue}
                placeholder={placeholder}
                onChange={handleInputChange} 
            ></input>
            <label>{label}</label>
        </div>
    );
}

export default Input;