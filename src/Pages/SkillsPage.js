import { Typography, Container, Card, Grid, CardContent } from "@mui/material";
import React from "react";
import { SkillComponent } from "../Components/SkillComponent";

const skills = [
    {name: "Javascript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    {name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    {name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
    {name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
    {name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"}, 
    {name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
    {name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"},
    {name: "Android", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"},
    {name: "Heroku", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"},
    {name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
    {name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
    {name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"},
    {name: "Jira", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"},
    {name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},
    {name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},
    {name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    {name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"},
]


export function SkillsPage() {
    return (
        <Container maxWidth={false} sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            padding: 3,
            width: '100vw',
            boxSizing: 'border-box',
            alignItems: 'center',
            overflow: 'hidden',
     

        }}>
            <Card sx={{width: '85vw', 
                height: '85vh', 
                borderRadius: 10,
                overflow: 'hidden',
                backgroundColor: 'transparent', /* Semi-transparent background */
                backdropFilter: 'blur(5px)', /* Apply blur effect */
                WebkitBackdropFilter: 'blur(5px)', /* Apply blur effect (Safari) */
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: "2px solid #66FCF1",
                
                
                }}>
              
                <CardContent>
                    <Typography variant="h4" gutterBottom color={"white"} mb={10}>
                        My Top Skills
                    </Typography>
                    <Grid container spacing={2} justifyContent={"center"}>
                        {skills.map(skill => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
                                <SkillComponent skill={skill} />
                            </Grid>
                        ))}
                    </Grid>
                    
                </CardContent>

            </Card>
        </Container>
    )
}