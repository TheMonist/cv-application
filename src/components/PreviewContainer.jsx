import Button from "./Button";;
// import "../styles//PreviewContainer.css";

function PreviewContainer({
    dialogRef,
    closeDialog,
    profile,
    downloadPdf,
  }) {
    return (
      <>
        <dialog className="preview" ref={dialogRef}>
          <div className="preview-buttons">
            <Button
              label="download"
              className="preview-download"
              onClick={downloadPdf}
            />
            <Button
              label="close"
              className="preview-close"
              onClick={closeDialog}
            />
          </div>
  
          <div className="cv">
            <div className="contact-section">
              <p className="name">{profile.name}</p>
              <p className="role">{profile.role}</p>
              <p className="phone">{profile.phone}</p>
              <p className="email">{profile.email}</p>
              <p className="linkedin">{profile.linkedin}</p>
              <p className="github">{profile.github}</p>
            </div>
            <div className="linebreak"></div>
            <div className="summary-section">
              <p>01 Professional Summary</p>
              {profile.summary && (
                <div
                  className="summary"
                  dangerouslySetInnerHTML={{
                    __html: profile.summary.replace(/\n/g, "<br>"),
                  }}
                />
              )}
            </div>
            <div className="linebreak"></div>
            <div className="experience-section">
              <p>02 Job Experience</p>
              {profile.experiences.map((experience, index) => (
                <div key={experience.id} className="experience">
                  <div className="dates">
                    <div className="experience-from">From: {experience.from}</div>
                    <div className="experience-to">To: {experience.to}</div>
                  </div>
                  <div className="experience-details">
                    <div className="experience-title-company-location">
                      <div className="experience-title">{experience.title}</div>
                      <div className="experience-company">
                        {experience.company}
                      </div>
                      <div className="experience-location">
                        {experience.location}
                      </div>
                    </div>
                    <div
                      className="responsibilities"
                      dangerouslySetInnerHTML={{
                        __html: experience.responsibilities.replace(
                          /\n/g,
                          "<br>"
                        ),
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="linebreak"></div>
            <div className="education-section">
              <p>03 Education</p>
              {profile.educations.map((education, index) => (
                <div key={education.id} className="education">
                  <div className="dates">
                    <div className="education-from">From: {education.from}</div>
                    <div className="education-to">To: {education.to}</div>
                  </div>
                  <div className="education-details">
                    <div className="education-degree-school-location">
                      <div className="education-degree">{education.degree}</div>
                      <div className="education-school">{education.school}</div>
                      <div className="education-location">
                        {education.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="linebreak"></div>
            <div className="skill-section">
              <p>04 Skills</p>
              <div className="skills">
                {profile.skills.map((skill, index) => (
                  <div key={skill.id} className="skill">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="linebreak"></div>
            <div className="language-section">
              <p>05 Languages</p>
              <div className="languages">
                {" "}
                {profile.languages.map((language, index) => (
                  <div key={language.id} className="language">
                    {language.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </dialog>
      </>
    );
  }

  export default PreviewContainer;