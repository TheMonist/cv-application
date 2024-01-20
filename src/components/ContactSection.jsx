import Input from "./Input";
import "../styles/ContactSection.css";

function ContactSection({ onFieldChange, profile }) {
    return (
        <div className="contact-section">
            <Input 
                label="Full Name"
                placeholder="Name"
                onChange={(value) => onFieldChange("name", value)}
                className="name"
                type="text"
                value={profile.name}
            />
            <Input 
                label="Role"
                placeholder="Role"
                onChange={(value) => onFieldChange("role", value)}
                className="role"
                type="text"
                value={profile.role}
            />
            <Input 
                label="Phone Number"
                placeholder="number"
                onChange={(value) => onFieldChange("number", value)}
                className="number"
                type="text"
                value={profile.number}

            />
            <Input 
                label="Email"
                placeholder="email"
                onChange={(value) => onFieldChange("email", value)}
                className="email"
                type="text"
                value={profile.email}
            />
            <Input 
                label="LinkedIn"
                placeholder="LinkedIn"
                onChange={(value) => onFieldChange("linkedin", value)}
                type="text"
                value={profile.linkedin}
            />
            <Input 
                label="Github"
                placeholder="Github"
                onChange={(value) => onFieldChange("github", value)}
            />
        </div>
    );
}

export default ContactSection;