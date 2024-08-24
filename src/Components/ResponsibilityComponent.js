import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { motion, stagger } from "framer-motion";

export function ResponsibilityComponent({ responsibilities, open, handleClose }) {

    const staggerList = stagger(0.1, { startDelay: 0.25 });

    const variants = {
        hidden: { opacity: 0, scale: 0.3, x: -50 },
        visible: (index) => ({
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                delay: staggerList(index),
                duration: 0.2,
            }
        }),
    };

    return (
        <Dialog open={open} onClose={handleClose} sx={{
            "& .MuiPaper-root": { // Target the Dialog Paper component
                backgroundColor: "black",
                boxShadow: "none", // Remove shadow if needed
                borderRadius: "16px", // Adjust the curve as needed
                border: "2px solid #66FCF1" // Optional: add a border for visibility
            }
        }}>
            <DialogTitle sx={{ color: "#66FCF1" }}> Key Responsibilities </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <motion.ul
                        initial="hidden"
                        animate={open ? "visible" : "hidden"}
                    >
                        {responsibilities.map((responsibility, index) => (
                            <motion.li key={index} custom={index} variants={variants}>
                                <Typography variant="h6"> {index + 1}. {responsibility} </Typography>
                            </motion.li>
                        ))}
                    </motion.ul>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: "#66FCF1" }}>
                        Close
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}
