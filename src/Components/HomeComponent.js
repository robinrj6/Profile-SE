import React from "react";
import '../assets/styles/home.css';
import avatar from "../assets/images/avatar.gif";


export default function HomeComponent(props) {
    const { darkMode, setDarkMode } = props;
    let theme;
    if (darkMode) {
        theme = "#efefefaa";
    } else {
        theme = "#222222aa";
    }
    return (
        <div className="home section" id="home">
            <div className="wrapper_home" style={{ borderColor:theme }}>
                {/* <img src={avatar} className="avatar"/><br/> */}
                <span className="nameHead" >Robin Jose Raju</span><br />
                <div className="subHead">
                    <span className="subHead1">&lt;/&gt; Full Stack Developer</span>
                    <span className="subHead2">&lt;/&gt; Software Engineer</span><br />
                </div>
            </div>
        </div>
    );
}