import React from "react";
import { Card, CardMedia, CardContent, Typography} from "@mui/material";
import {motion} from "framer-motion";


export function SkillComponent ({skill}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
        >
            <Card sx={{ borderRadius: 2, width: '20vw', height: '10vh', display: "flex", justifyContent: "center", alignItems: "center",  backgroundColor: "transparent", border: "2px solid #66FCF1",}}>
                <CardMedia
                    component="img"
                    image={skill.image}
                    sx={{ width: 50, height: 50, marginRight: 1 , marginTop: 1, marginLeft: 1}} // Adjust the size and margin as needed
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" color={"white"} mt={3}> {skill.name} </Typography>
                </CardContent>
            </Card>
        </motion.div>
    )
}   