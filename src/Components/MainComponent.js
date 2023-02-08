import NavbarComponent from "./NavbarComponent";
import React from "react";
import HomeComponent from "./HomeComponent";
import '../assets/styles/main.css';

export default function MainComponent() {
    const [darkMode, setDarkMode] = React.useState(true);
    return (
        <div className='main'>
            <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
            <HomeComponent />
        </div>
    );
}