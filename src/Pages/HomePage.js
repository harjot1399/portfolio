import { Box, Typography, Avatar, Container, Grid} from "@mui/material"
import React from "react"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImg from '../Images/harjot.jpg'
import { motion } from "framer-motion";
import { DiDjango } from "react-icons/di"
import { FaAndroid, FaAppStore, FaAws, FaBook, FaJava, FaPython, FaReact } from "react-icons/fa"
import { FaVolleyball } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5"
import { SiFlutter } from "react-icons/si"
import background from '../Images/background.jpg'
import { Element } from 'react-scroll'

const skills = [
    {name: "Javascript", icon: <IoLogoJavascript/>},
    {name: "React", icon: <FaReact/>},
    {name: "Flutter", icon: <SiFlutter/>},
    {name: "Django", icon: <DiDjango/>},
    {name: "Native Android", icon: <FaAndroid/>},
    {name: "Java", icon: <FaJava/>},
    {name: "Python", icon: <FaPython/>},
    {name: "AWS", icon: <FaAws/>}
]

const name = "Harjot Singh".split(" ")

const profession = "Software Engineer | Product Manager".split(" ")

export function HomePage() {
    return (
        
            <Container maxWidth={false} sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                padding: 3,
                width: '100vw',
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}>

                <Grid container spacing={4} alignItems="center" mt={20} ml={5}>
                            {/* Left side - Text content */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom mb={1} color={"#66FCF1"}>
                            Hi{" "}
                            <motion.span
                                initial={{ rotate: 0 }}
                                animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
                                transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
                                style={{ display: 'inline-block' }}
                            >
                            👋
                            </motion.span>
                            {" "} ,I am
                        </Typography>
                        {name.map((el, i) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 3,
                                    delay: i / 10,
                                }}
                                key={i}
                                style={{
                                    color: "white",       // Change text color
                                    fontSize: "60px",       // Change font size // Ensures proper spacing and alignment
                                }}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                        <br />
                        
                        {profession.map((el, i) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 3,
                                    delay: i / 10,
                                }}
                                key={i}
                                style={{
                                    color: "#66FCF1",       // Change text color
                                    fontSize: "35px",  
                                           // Change font size // Ensures proper spacing and alignment
                                }}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                        

                        
                        <Typography variant="h6" gutterBottom mb={3} color={"white"} mt={2}>
                            A skilled software engineer with expertise in building web and mobile applications. With proficiency in frameworks like Flutter, React, and Django, I have a proven track record of delivering seamless and scalable solutions. My experience as a Product Manager has equipped me with the ability to lead Agile teams, align product features with strategic business goals, and bring innovative ideas to life. From creating intuitive user experiences to developing robust backend systems, I thrive on solving complex technical challenges.
                        </Typography>

                    
                        
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, marginTop: 3}}>
                            <a href="https://www.linkedin.com/in/harjot-singh-1a03282aa/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={40} color="#66FCF1" />
                            </a>
                            <Box ml={2}>
                                <a href="https://github.com/harjot1399" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={40} color="#66FCF1" />
                                </a>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right side - Photo */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img 
                                src={profileImg}
                                alt="Harjot Singh" 
                                style={{ width: '100%', maxWidth: '300px', borderRadius: '50%' }}
                            />
                        </Box>
                    </Grid>
                </Grid>


            </Container>
            
        

    );
}


