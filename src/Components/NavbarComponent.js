import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { FormGroup, Switch } from '@mui/material';
import RoofingIcon from '@mui/icons-material/Roofing';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import '../assets/styles/navbar.css';
import { ThemeContext, themes } from '../assets/extras/themeContext';

export default function NavbarComponent(props) {
    const { darkMode, setDarkMode } = props;
    let theme;
    if (darkMode) {
        theme = "dark";
    } else {
        theme = "light";
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg={theme} variant={theme}
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="/"><SmartToyIcon className='brandIcon' /><span className='nameBrand'>Robin</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#main">
                                <RoofingIcon>
                                    Home
                                </RoofingIcon>
                            </Nav.Link>
                            <Nav.Link href="#showcase">
                                <WorkspacePremiumIcon>
                                    Projects
                                </WorkspacePremiumIcon>
                            </Nav.Link>
                            <Nav.Link href="#contact">
                                <ConnectWithoutContactIcon>
                                    Contact
                                </ConnectWithoutContactIcon>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <FormGroup>
                                <WbSunnyIcon className='lightIcon' />
                                <ThemeContext.Consumer>
                                    {({ changeTheme }) => (<Switch onClick={() => {
                                        setDarkMode(!props.darkMode);
                                        changeTheme(darkMode ? themes.dark : themes.light);
                                    }} defaultChecked />
                                    )}
                                </ThemeContext.Consumer>
                                <NightlightRoundIcon className='darkIcon' />
                            </FormGroup>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}