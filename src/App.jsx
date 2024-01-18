import { useState, useRef } from 'react'
import './App.css'
import Button from "./components/Button";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import LanguagesSection from "./components/LanguagesSection";
import PreviewContainer from "./components/PreviewContainer";
import SkillsSection from "./components/SkillsSection";
import Summary from "./components/Summary";
import html2pdf from "html2pdf";

function App() {
    const defaultProfile = {
        name: "John Smith",
        role: "Software Engineer",
        phone: "1234567890",
        email: "johnsmith@example.com",
        linkedin: "linkedin.com/in/johnsmith",
        github: "github.com/johnsmith",
        summary: "Experienced software engineer passionate about creating efficient and scalable solutions.",
        experiences: [
            {
                id: Math.random(),
                title: "Senior Software Developer",
                company: "Tech Solutions Inc.",
                from: "2016-11-10",
                to: "2017-11-19",
                location: "San Francisco, CA",
                responsibilities:
                  "Led a team in developing innovative software solutions.",
            },
            {
                id: Math.random(),
                title: "Software Engineer",
                company: "SoftCo",
                from: "2015-06-17",
                to: "2018-03-22",
                location: "New York, NY",
                responsibilities:
                  "Contributed to the development of various software projects.",
            },
        ],
        educations: [
            {
                id: Math.random(),
                degree: "Master of Science in Computer Science",
                school: "University of Technology",
                from: "2013-09-03",
                to: "2015-11-04",
                location: "Boston, MA",
            },
            {
                id: Math.random(),
                degree: "Bachelor of Science in Software Engineering",
                school: "State University",
                from: "2009-09-01",
                to: "2013-04-09",
                location: "Los Angeles, CA",
            },
        ],
        skills: [
            {
                id: Math.random(),
                name: "JavaScript",
            },
            {
                id: Math.random(),
                name: "Python",
            },
            {
                id: Math.random(),
                name: "React",
            },
            {
                id: Math.random(),
                name: "Node.js",
            },
            {
                id: Math.random(),
                name: "SQL",
            },
        ],
        languages: [
            {
                id: Math.random(),
                name: "English",
            },
            {
                id: Math.random(),
                name: "Spanish",
            },
            {
                id: Math.random(),
                name: "French",
            },
        ],
    };

    const emptyProfile = {
        name: "",
        role: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        summary: "",
        experiences: [
            {
                id: Math.random(),
                title: "",
                company: "",
                from: "", 
                to: "",
                location: "",
                responsibilities: "",
            },
        ],
        educations: [
            {
                id: Math.random(),
                degree: "",
                school: "",
                from: "",
                to: "",
                location: "",
            }
        ],
        skills: [
            {
                id: Math.random(),
                name: "",
            }
        ],
        languages: [
            {
                id: Math.random(),
                name: ""
            }
        ],
    };

    const [profile, setProfile] = useState(emptyProfile);

    const handleFieldChange = (field, value) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            [field]: value,
        }));
        console.log(profile); 
    };

    const handleListChange = (index, fieldName, value, arrayName) => {
        const updatedExperiences = [...profile[arrayName]];
        updatedExperiences[index][fieldName] = value;
        handleFieldChange(arrayName, updatedExperiences);
    };

    const addItem = (arrayName, newItem) => {
        const updatedProfile = {
            ...profile,
            [arrayName]: [...profile[arrayName], newItem],
        };
        setProfile(updatedProfile);
    }

    const removeItem = (arrayName, item) => {
        const updatedItems = profile[arrayName].filter((i) => i.id !== item.id);
        const updatedProfile = {
            ...profile,
            [arrayName]: updatedItems,
        };
        setProfile(updatedProfile);
    };

    // Preview Elements
    const dialogRef = useRef(null);
    
    const openDialog = () => {
        dialogRef.current.showModal();
        dialogRef.current.classList.add("on");
        dialogRef.current.addEventListener("keydown", handleKeyDown);
    };

    const closeDialog = () => {
        dialogRef.current.close();
        dialogRef.current.classList.remove("on");
        dialogRef.current.removeEventListener("keydown", handleKeyDown);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            closeDialog();
        }
    } 

    const downloadPdf = () => {
        const documentToPrint = document.querySelector(".cv");
        const options = {
          margin: 0.5,
          filename: "cv.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        console.log(documentToPrint);
        html2pdf().set(options).from(documentToPrint).save();
      };
    
      const fillMockData = () => {
        setProfile(defaultProfile);
      };
    
      return (
        <>
          <main>
            <PreviewContainer
              dialogRef={dialogRef}
              closeDialog={closeDialog}
              profile={profile}
              downloadPdf={downloadPdf}
            />
            <div className="controls">
              <Button
                label="preview"
                className="preview-button"
                onClick={openDialog}
              />
              <Button
                label="fill mock data"
                className="preview-button"
                onClick={fillMockData}
              />
            </div>
            <div className="form">
              <ContactSection onFieldChange={handleFieldChange} profile={profile} />
              <div className="linebreak"></div>
              <Summary
                onFieldChange={handleFieldChange}
                summary={profile.summary}
              />
              <div className="linebreak"></div>
              <ExperienceSection
                experiences={profile.experiences}
                addItem={addItem}
                removeItem={removeItem}
                onChange={handleListChange}
              />
              <div className="linebreak"></div>
              <EducationSection
                educations={profile.educations}
                addItem={addItem}
                removeItem={removeItem}
                onChange={handleListChange}
              />
              <div className="linebreak"></div>
              <SkillsSection
                skills={profile.skills}
                addItem={addItem}
                removeItem={removeItem}
                onChange={handleListChange}
              />
              <div className="linebreak"></div>
              <LanguagesSection
                languages={profile.languages}
                addItem={addItem}
                removeItem={removeItem}
                onChange={handleListChange}
              />
            </div>
          </main>
        </>
      );
}

export default App

// https://github.com/sevleo/cv-app