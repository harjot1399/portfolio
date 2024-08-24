import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import WorkIcon from '@mui/icons-material/Work';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { ResponsibilityComponent } from "../Components/ResponsibilityComponent";

export function ExperiencePage() {

    const [open, setOpen] = React.useState(false);
    const [responsibilities, setResponsibilities] = React.useState([]); 

    const handleOpenDialog = (responsibilities) => {
        setResponsibilities(responsibilities);
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };
    
    const experiences = [
        {
          title: "Software Developer",
          company: "C2 Conscious Customer",
          date: "Jan 2024 - Apr 2024",
          responsibilities: [
            "Broadened market reach and user accessibility by creating a cross-platform mobile application utilizing Flutter, optimizing for both Android and iOS ecosystems",
            "Enhanced security measures and user verification processes by architecting and implementing an authentication system using Firebase Authentication, employing rigorous analytical methods, fostering a secure and trustworthy app environment",
            "Improved operational efficiency and data management by pioneering an innovative feature leveraging the GPT API, facilitating the mass upload of data to the database",
            "Ensured application quality and stability by implementing unit and widget tests, resulting in a robust and reliable application"
          ]
        },
        {
          title: "Product Owner",
          company: "SOTI Inc.",
          date: "May 2023 - December 2023",
          responsibilities: [
            "Integrated cutting-edge technology into the Android platform by leveraging data-driven decision-making and focusing on customer experience, resulting in enhanced user satisfaction",
            "Drove successful releases and maintained consistent messaging by collaborating with Product Management, Project Management, Marketing, and Technical Writing teams, ensuring alignment across departments.",
            "Increased productivity by 20% and consistently met project milestones ahead of schedule by effectively collaborating with cross-functional teams, including engineers, to lead Agile sprints.",
            "Aligned feature development with strategic business objectives and user demands by curating a prioritized product backlog, leading to a 15% increase in feature adoption rate."

          ]
        },
        {
          title: "Product Owner",
          company: "SOTI Inc.",
          date: "Jan 2022 - Aug 2022",
          responsibilities: [
            "Integrated cutting-edge technology into the Android platform by leveraging data-driven decision-making and focusing on customer experience, resulting in enhanced user satisfaction",
            "Drove successful releases and maintained consistent messaging by collaborating with Product Management, Project Management, Marketing, and Technical Writing teams, ensuring alignment across departments.",
            "Increased productivity by 20% and consistently met project milestones ahead of schedule by effectively collaborating with cross-functional teams, including engineers, to lead Agile sprints.",
            "Aligned feature development with strategic business objectives and user demands by curating a prioritized product backlog, leading to a 15% increase in feature adoption rate."

          ]
          
        }
    ];

    return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center',
            }}>
                
                <Typography variant="h4" color="#66FCF1" gutterBottom>
                    My Experience
                </Typography>
    
                <Timeline position="alternate" sx={{marginTop: 5}}>
                {experiences.map((exp, index) => (
                
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            <Typography variant="h6" color="#66FCF1" mt={1}>
                            {exp.date}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                            <WorkIcon />
                            </TimelineDot>
                            {index < experiences.length - 1 && <TimelineConnector sx={
                                {height: '30vh'}
                            } />}
                        </TimelineSeparator>
                        
                        <TimelineContent>
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
                                <Box sx={{ display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center', 
                                    padding: 2, 
                                    backgroundColor: 'transparent' , 
                                    backdropFilter: 'blur(5px)', /* Apply blur effect */
                                    WebkitBackdropFilter: 'blur(5px)',
                                    borderRadius:5,
                                    border: "2px solid #66FCF1",
                                    width: '50%', 
                                    width: { xs: '80%', sm: '65%', md: '50%' }, // Adjusted width
                                    maxWidth: '400px', // Reduced max width
                                    minWidth: '200px', // Reduced min width
                                    margin: 'auto', // Center the box // Center the box
                                    // marginLeft: index % 2 === 0 ? 0 : 'auto', 
                                    // marginRight: index % 2 === 0 ? 'auto' : 0
                                    
                                }}
                                    onClick={() => handleOpenDialog(exp.responsibilities)}
                                >

                                    <Typography variant="h6" component="h1" color={"white"}>
                                        {exp.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color={"white"}>{exp.company}</Typography>
                                </Box>
                            </motion.div>
                        </TimelineContent>    
                    </TimelineItem>
                
                ))}
                </Timeline>

                <ResponsibilityComponent open={open} responsibilities={responsibilities} handleClose={handleCloseDialog} />
            </Box>
       
    
    );
}

