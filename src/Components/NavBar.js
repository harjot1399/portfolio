import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import '../App.css';


export function NavBar () {

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AppBar position="static" className="NavBar"
            sx={{ background: "transparent", boxShadow: "none", width: "100%", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: 'blur(10px)', /* Apply blur effect */
                WebkitBackdropFilter: 'blur(10px)', /* Safari support */  }}
        >
            <Toolbar>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%"}}> 
                    <Button  sx = {{fontSize: 20, color: "#66FCF1"}} onClick={() => scrollToSection('home')}>Home</Button>
                    <Button  sx = {{fontSize: 20, color: "#66FCF1"}} onClick={() => scrollToSection('skills')}>Skills</Button>
                    <Button  sx = {{fontSize: 20, color: "#66FCF1"}} onClick={() => scrollToSection('experience')}>Experience</Button>
                    <Button  sx = {{fontSize: 20, color: "#66FCF1"}} onClick={() => scrollToSection('project')}>Projects</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )

}

