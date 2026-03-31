import Certificates from "./Page/Certificates"
import Contact from "./Page/Contact"
import Education from "./Page/Education"
import Home from "./Page/Home"
import Navbar from "./Page/Navbar"
import Programming from "./Page/Programming"
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);


    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Home />
        <Education />
        <Programming />
        <Certificates />
        <Contact />
        

      </div>
    )
  }






export default App
