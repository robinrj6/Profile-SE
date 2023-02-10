import NavbarComponent from "./NavbarComponent";
import React from "react";
import HomeComponent from "./HomeComponent";
import '../assets/styles/main.css';
import SkillComponent from "./SkillsComponent";

export default function MainComponent() {
    const [darkMode, setDarkMode] = React.useState(true);
    return (
        <div className='main' id="main">
            <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
            <HomeComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            <SkillComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
    );
}