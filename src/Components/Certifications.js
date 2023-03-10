import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LaunchIcon from '@mui/icons-material/Launch';
import '../assets/styles/cert.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
}
export default function Certifications(props) {
    const { darkMode, setDarkMode } = props;
    let theme = (darkMode) ? "#ced0d6bb" : "#3d3f43aa";
    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    return (
        <div className="cert section" id="cert">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                    className="box"
                >
                    <div className="card" style={{ backgroundColor: theme }}>
                        <div className="card-body row">
                            <div className="image col-2">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format&dpr=1&w=150&h=150&fit=clamp" alt="an Image" />
                            </div>
                            <div className="col text">
                                <span>Meta Front-End Developer Professional Certificate, Coursera</span>
                                <ul>
                                    <li>Introduction to Front-End Development, Feb 2023 &nbsp;<a href="https://coursera.org/verify/CE23T7C6AKWK"><LaunchIcon className="link_icon" /></a></li>
                                    <li>Programming with JavaScript, March 2023&nbsp;<a href="https://coursera.org/verify/YHG2XDJLT9NF"><LaunchIcon className="link_icon" /></a></li>
                                    <li>React Basics by Meta, Dec 2022&nbsp;<a href="https://coursera.org/verify/HBTYB3ZNUNZB"><LaunchIcon className="link_icon" /></a></li>
                                </ul>
                            </div>
                            <div className="col-1">
                                <Stack direction="column" spacing={1} >
                                    <Chip color="success" label="HTML5" size="small" />
                                    <Chip color="success" label="CSS" size="small" />
                                    <Chip color="success" label="JS" size="small" />
                                    <Chip color="success" label="React" size="small" />
                                </Stack>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <br></br>
                <motion.div
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                    className="box"
                >
                    <div className="card" style={{ backgroundColor: theme }}>
                        <div className="card-body row">
                            <div className="image col-2">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/eb/cab7f07dd411e8991ff71ead974a6c/Slide1.png?auto=format&dpr=1&w=150&h=150&fit=clamp" alt="an Image" />
                            </div>
                            <div className="col text">
                                <span>Full-Stack Web Development with React Specialization, Coursera</span>
                                <ul>
                                    <li>Server-side Development with NodeJS, Express and MongoDB, Jan 2023 &nbsp;<a href="https://coursera.org/verify/MNHYWJZVFPC8"><LaunchIcon className="link_icon" /></a></li>
                                    <li>Front-End Web Development with React, January 2021 &nbsp;<a href="https://coursera.org/verify/XMR6RYB44QBA"><LaunchIcon className="link_icon" /></a></li>
                                    <li>Front-End Web UI Frameworks and Tools: Bootstrap 4, November 2020 &nbsp;<a href="https://coursera.org/verify/ZEFNN5Y3M37J"><LaunchIcon className="link_icon" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <br></br>
                <motion.div
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                    className="box"
                >
                    <div className="card" style={{ backgroundColor: theme }}>
                        <div className="card-body row">
                            <div className="image col-2">
                                <img src="https://www.e7health.com/files/blogs/chest-x-ray-29.jpg" alt="an Image" width={"150px"} height={"150px"} />
                            </div>
                            <div className="col text">
                                <span>PneumoGAN: A GAN based Model for Pneumonia Detection ,IEEE Xplore&nbsp;<Chip color="primary" label="Publication" size="small"></Chip></span>
                                <ul><li>DOI:10.1109/ACCESS51619.2021.9563341  &nbsp;<a href="https://ieeexplore.ieee.org/document/9563341"><LaunchIcon className="link_icon" /></a></li></ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div >
    );

}