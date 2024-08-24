import { Box, Typography, Grid} from "@mui/material"
import { Card, CardContent, CardMedia } from "@mui/material"
import React from "react"
import qrquest from "../Images/qrquest.jpeg"
import authcord from "../Images/authcord.jpeg"
import budgetbuddy from "../Images/budgetbuddy.jpeg"
import fchat from "../Images/fchat.jpg"
import recipewiki from "../Images/recipewiki.jpg"
import c2 from "../Images/C2.jpeg"
import healthworks from "../Images/healtheworks.jpeg"
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const projects = [
    {   name: "QR Quest", 
        image: qrquest,
        techstack : ["Java", "Android"], 
        description: "QR Quest is an Android game that combines scavenger hunts with QR code scanning, allowing users to compete by collecting QR codes across various locations. The game includes a leaderboard, a map feature to track scanned QR codes, and a scoring system that displays scores by region and city. Developed using Java and the MVC architectural pattern, the project emphasizes modular design and a user-friendly interface.",
        gitlink : "https://github.com/CMPUT301W23T28/QR-Quest"
    },

    {   name: "AuthCord", 
        image: authcord,
        techstack : ["React", "Django", "Heroku"],
        description: "AuthCord is a web application designed with a secure and efficient authentication system using Django for the backend. It features user registration, friend requests, post creation, liking, and commenting functionalities. RESTful API endpoints were developed to handle these tasks, ensuring a maintainable and scalable service. The APIs were integrated with a React frontend, enabling seamless communication between server and client-side components. The project also includes responsive frontend pages for signup, login, navigation, and a search bar, demonstrating a robust integration of backend and frontend systems.",
        gitlink : "https://github.com/harjot1399/Authcord",
    },
        

    {   name: "Budget Buddy", 
        techstack : ["Flutter", "Firebase"],
        image: budgetbuddy,
        description: "BudgetBuddy is a cross-platform mobile budgeting app I developed using Flutter and Firebase, designed to help users manage their finances effectively. By leveraging Firestore for storing user and budget data, and Firebase Authentication for secure login, the app provides a seamless and real-time budget tracking experience. The core features of BudgetBuddy include creating and customizing budgets, adding expense categories, and tracking spending over time. This project showcases my ability to build user-friendly mobile applications with Flutter, utilize Firebase for backend services and data management, and deliver a valuable tool for users to achieve their financial goals." ,
        gitlink : "https://github.com/harjot1399/budgetBuddy"

    },
    {   name: "fchat", 
        image: fchat,
        techstack : ["React", "Firestore", "Cloud Functions"],
        description: "fChat is a real-time chat web application developed using React.js and Firestore, allowing users to connect anonymously for spontaneous conversations. The application includes an optimized matching algorithm, powered by cloud functions, to pair users based on their preferences and interests. It features a secure authentication system to maintain user data privacy while providing a personalized experiencee",
        gitlink : "https://github.com/harjot1399/fChat"},
    {
        name: "RecipeWiki",
        image: recipewiki,
        techstack: ["Flutter"],
        description: "RecipeWiki is a mobile application developed using Flutter that provides users with a platform to discover and explore recipes. The app features a user-friendly interface with a powerful search bar that allows users to find recipes quickly. Additionally, it includes advanced filtering options, enabling users to search for recipes based on various criteria like cuisine, ingredients, and more.",
        gitlink: "https://github.com/harjot1399/recipeWiki"
    },
    {
        name: "HealtheWorks",
        image: healthworks,
        techstack: ["Flutter", "Python", "Unity"],
        description: "HealtheWorks is a desktop application designed to track joint movements using data collected from Movella IMU sensors. The application generates 3D animations based on this data, allowing users to visualize joint movements in a dynamic way. Additionally, HealtheWorks enables users to record their sessions and review them at a later time.",
        gitlink: "https://github.com/harjot1399/ECE-492-3DAnimationUsingIMUData"
    }

];

export function ProjectPage () {
    return (
    
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100vw', alignItems: 'center'}}>
            <Typography variant="h4" mt={2} mb={2} sx={{color: "#66FCF1"}}> My Projects</Typography>


            {projects.map((project, index) => (
                <motion.div
                    initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? 50 : -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                >
                    <Card sx= {{display : 'flex', 
                        width : '80vw', 
                        marginBottom: 5, 
                        height: '40vh', 
                        borderRadius: 4, 
                        padding: 2, 
                        backgroundColor: "transparent",
                        backdropFilter: 'blur(8px)', /* Apply blur effect */
                        WebkitBackdropFilter: 'blur(8px)',
                        border: "2px solid #66FCF1",
                        }}>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={project.image}
                            alt="project image"
                            sx={{borderRadius: 2}}
                            width="80%"
                        />
                        <CardContent sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start', // Align items to the start of the cross-axis
                            padding: 2, // Adjust padding as needed
                        // Ensures the content area takes full width
                        }}>
                            {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}> */}
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }} mb={2} color={"#66FCF1"}>
                                    {project.name}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, marginBottom: 2 }}>
                                    {project.techstack.map((tech, index) => (
                                        <Card sx={{ borderRadius: 2, display: "inline-block", backgroundColor: "transparent", border: "2px solid #66FCF1", whiteSpace : 'nowrap', paddingX: 2, height: '3vh' }}>
                                            <CardContent sx={{ padding: 0 }}>
                                                <Typography gutterBottom variant="body1" color={"white"} mt={0.5}> {tech} </Typography>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Box>
                                <Typography variant="body1" color="white" gutterBottom mb={3} sx={{textAlign: 'start'}}>
                                    {project.description}
                                </Typography>
                            {/* </Box> */}
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%', marginTop: 'auto' }}>
                                <a href={project.gitlink} target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
                                    <FaGithub size={40} color="white" />
                                </a>
                            </Box>
                        </CardContent>


                    </Card>
                </motion.div>
            ))}
        </Box>

    )
}

