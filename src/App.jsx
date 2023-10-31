import { useState } from 'react'
import './App.css'

function App() {
  
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  
  const handleCloseWelcome = () => {
    setWelcomeMessage(false);
  }
  
  const handleOpenWelcome = () => {
    setWelcomeMessage(true);
  }

  return (
    <div class="app">
      <Resume />
      {welcomeMessage ? (<Welcome exit={handleCloseWelcome} />) : <Help open={handleOpenWelcome} />}
    </div>
  )
}

export default App
