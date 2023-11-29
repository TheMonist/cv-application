const Welcome = ({ exit }) => {
    const clearStorage = () => {    
        localStorage.clear();
        window.location.reload(false);
    }

    return (
        // You are going to need to make this semantic eventually
        <div className="start">
        <div className="welcome">
          <div className="title">Welcome to CV Generator!</div>
          <div className="step">
            <div className="action">ADD</div>
            <div>
              Hover over a section title to add education experience, work
              experience, or skills.
            </div>
            <div className="action">EDIT</div>
            <div>Hover over an entry to edit details or delete the entry.</div>
            <div className="action">PRINT</div>
            <div>
              Move your cursor away from the screen, and click{" "}
              <span className="code">COMMAND + P</span> on Mac or{" "}
              <span className="code">CTRL + P</span> on Windows to print your
              formatted resume!
            </div>
          </div>
          <button className="clear" onClick={clearStorage}>Clear local storage</button>
          <div className="learn">
            <div className="hint">
              Hover your cursor in the top-right corner of the page to show this box again.
            </div>
          </div>
        </div>
        <button className="close" onClick={exit}>X</button>
      </div>
    );
};

export default Welcome;