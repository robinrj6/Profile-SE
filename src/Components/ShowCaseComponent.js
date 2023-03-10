import React from "react";
import "../assets/styles/showcase.css";
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";
import icon1 from '../assets/images/Favorites/icon(1).png';
import icon2 from '../assets/images/Favorites/icon(2).png';
import icon3 from '../assets/images/Favorites/icon(3).png';
import icon4 from '../assets/images/Favorites/icon(4).png';
import icon5 from '../assets/images/Favorites/icon(5).png';
import icon6 from '../assets/images/Favorites/icon(6).png';
import icon7 from '../assets/images/Favorites/icon(7).png';
import icon8 from '../assets/images/Favorites/icon(8).png';
import icon9 from '../assets/images/Favorites/icon(9).png';
import icon10 from '../assets/images/Favorites/icon(10).png';
import icon11 from '../assets/images/Favorites/icon(11).png';
import icon12 from '../assets/images/Favorites/icon(12).png';
import icon13 from '../assets/images/Favorites/icon(13).png';
import icon14 from '../assets/images/Favorites/icon(14).png';
import icon15 from '../assets/images/Favorites/icon(15).png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
}
export default function ShowCaseComponent(props) {
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
        <div className="showcase section" id="showcase">
            <div className="wrapper_show container" >
                <p> I always try to upskill myself and these are the fields I excel at...</p>
                <Row>
                    <Col xs={6} md={3}>
                        <motion.div
                            ref={ref}
                            variants={boxVariant}
                            initial="hidden"
                            animate={control}
                            className="box"    
                        >
                            <Card style={{ width: '20rem', height: '15rem', backgroundColor: theme }} >
                                <Card.Body>
                                    <Card.Text>
                                        <span className="cardHeader">Core Programming</span>
                                        <ul className="items">
                                            <li className="item"><img src={icon2} width='30px' />&nbsp; C/C++</li>
                                            <li className="item"><img src={icon6} width='30px' />&nbsp; Java</li>
                                            <li className="item"><img src={icon13} width='30px' />&nbsp; Python</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col xs={6} md={3}>
                        <motion.div
                            ref={ref}
                            variants={boxVariant}
                            initial="hidden"
                            animate={control}
                            className="box"
                        >
                            <Card style={{ width: '20rem', height: '15rem', backgroundColor: theme }}>
                                <Card.Body>
                                    <Card.Text>
                                        <span className="cardHeader">Web Developing</span>
                                        <ul className="items">
                                            <li className="item"><img src={icon5} width='30px' />&nbsp; HTML</li>
                                            <li className="item"><img src={icon3} width='30px' />&nbsp; CSS</li>
                                            <li className="item"><img src={icon7} width='30px' />&nbsp; JavaScript</li>
                                            <li className="item"><img src={icon11} width='30px' />&nbsp; PHP</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col xs={6} md={3}>
                        <motion.div
                            ref={ref}
                            variants={boxVariant}
                            initial="hidden"
                            animate={control}
                            className="box"
                        >
                            <Card style={{ width: '20rem', height: '15rem', backgroundColor: theme }}>
                                <Card.Body>
                                    <Card.Text>
                                        <span className="cardHeader">Database Management</span>
                                        <ul className="items">
                                            <li className="item"><img src={icon9} width='30px' />&nbsp; MySQL</li>
                                            <li className="item"><img src={icon12} width='30px' />&nbsp; PostgreSQL</li>
                                            <li className="item"><img src={icon10} width='30px' />&nbsp; OracleDB</li>
                                            <li className="item"><img src={icon8} width='30px' />&nbsp; MongoDB</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col xs={6} md={3}>
                        <motion.div
                            ref={ref}
                            variants={boxVariant}
                            initial="hidden"
                            animate={control}
                            className="box"
                        >
                            <Card style={{ width: '20rem', height: '15rem', backgroundColor: theme }}>
                                <Card.Body>
                                    <Card.Text>
                                        <span className="cardHeader">Libraries & Frameworks</span>
                                        <ul className="items">
                                            <li className="item"><img src={icon14} width='30px' />&nbsp; React</li>
                                            <li className="item"><img src={icon1} width='30px' />&nbsp; Angular</li>
                                            <li className="item"><img src={icon15} width='30px' />&nbsp; SpringBoot</li>
                                            <li className="item"><img src={icon4} width='30px' />&nbsp; Express</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </div >
    );

}