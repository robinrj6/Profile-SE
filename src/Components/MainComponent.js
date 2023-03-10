import NavbarComponent from "./NavbarComponent";
import React from "react";
import HomeComponent from "./HomeComponent";
import '../assets/styles/main.css';
import ShowCaseComponent from "./ShowCaseComponent";
import Certifications from "./Certifications";



export default function MainComponent() {
    const [darkMode, setDarkMode] = React.useState(false);
    return (
        <div className='main' id="main">
            
            <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            <HomeComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            {/* <SkillComponent darkMode={darkMode} setDarkMode={setDarkMode}/> */}
            <ShowCaseComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            <Certifications darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    );
}