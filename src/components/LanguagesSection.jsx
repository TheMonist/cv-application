import Input from "./Input";
import Button from "./Button";
import "../styles/LanguageSection.css"

function LanguagesSection({
    languages,
    addItem,
    removeItem,
    onChange,
}) {
    function addLanguage() {
        const newLanguage = {
            id: Math.random(),
            name: "",
        };
        addItem("languages", newLanguage);
    }

    return (
        <div className="language-section">
            <p>05 Languages</p>
            <div className="languages">
                {languages.map((language, index) => (
                    <div key={language.id} className="language">
                        <Input
                            label="Language"
                            placeholder="Language"
                            className="language-name"
                            onChange={(value) => 
                                onChange(index, "name", value, 'languages')
                            }
                        />
                        <Button 
                            label="Remove"
                            className="remove-language"
                            smallButton="true"
                            onClick={() => {
                                removeItem("languages", language)
                            }}
                        />
                    </div>
                ))}
            </div>
            <Button 
                label="Add language"
                className="add-language"
                onClick={() => {
                    addLanguage();
                }}
            />
        </div>
    );
}

export default LanguagesSection;