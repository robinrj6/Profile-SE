import React from "react";
import '../assets/styles/home.css';
import avatar from "../assets/images/avatar.gif";
import { useEffect } from "react";
import { Canvas } from "react-three-fiber";
import AnimatedSphere from "./AnimatedSphere";
import { OrbitControls, Html } from "@react-three/drei";
import styled from 'styled-components';



export default function HomeComponent(props) {
    const { darkMode, setDarkMode } = props;
    let theme = (darkMode) ? "#efefefaa" : "#222222aa";

    return (
        <div className="home section" id="home">
            <Canvas className="canvas">
                {/* <OrbitControls enableZoom={false} /> */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <AnimatedSphere />
                <Html >
                    <div className="wrapper_home" style={{ borderColor: theme }}>
                        {/* <img src={avatar} className="avatar"/><br/> */}
                        <span className="nameHead" >Robin Jose Raju</span><br />
                        <div className="subHead">
                            <span className="subHead1">&lt;/&gt; Full Stack Developer</span>
                            <span className="subHead2">&lt;/&gt; Software Engineer</span><br />
                        </div>
                    </div>
                </Html>
            </Canvas>
        </div>
    );
}