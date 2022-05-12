import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

function InTemplate({fsize_name,fsize_rest,intro,skills,projects,links,education,color}) {

    return (
        <>
            <Paper  elevation={3} sx={{width:"100%",margin:"auto",mt:3,mb:3,paddingY:4}}>
                <Container maxWidth="lg" id="resume">
                    <Grid container sx={{height:"130px", display:"flex",alignItems:"center" ,mb:3}}>
                        <Grid item xs={5} sx={{ textAlign: "left" }}><Box component="typography" sx={{fontSize:`${fsize_name}px`,fontWeight:"bolder",borderBottom:`4px solid ${color}`}}>{intro.name}</Box></Grid>
                        <Grid item xs={7} sx={{ textAlign: "right" }}>
                            <Typography sx={{color:"gray", fontSize:`${fsize_rest-3}px`}}>{intro.email}</Typography>
                            <Typography sx={{color:"gray", fontSize:`${fsize_rest-3}px`}}>+91 {intro.phone}</Typography>
                            <Typography sx={{color:"gray", fontSize:`${fsize_rest-3}px`}}>{intro.city}, {intro.state}</Typography>
                        </Grid>
                    </Grid>
                    <Divider />

                    <Grid container sx={{mt:5}}>
                        <Grid item xs={5} sx={{ textAlign: "left" }}><Typography sx={{fontFamily:"Catamaran",fontSize:`${fsize_rest}px`,color:"#73787c"}}>PROJECTS</Typography></Grid>
                        <Grid item xs={7} sx={{ textAlign: "left" }}>
                            {projects.map((pro, id) => (
                                <Box key={id} sx={{mb:3, objectFit:"contain",overflow:"auto",display:"block" }}>
                                    <Typography sx={{ fontWeight: "bold",fontSize:`${fsize_rest}px`}}>{pro.name}</Typography>
                                    <Typography marginBottom={2} sx={{ color: `${color}`,fontSize:`${fsize_rest-2}px`}}>{pro.link}</Typography>
                                    <Typography sx={{ color: "#38373d",fontSize:`${fsize_rest-2}px`}}>{pro.description}</Typography>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>

                    <Divider/>

                    <Grid container sx={{mt:5}}>
                        <Grid item xs={5} sx={{ textAlign: "left" }}><Typography sx={{fontFamily:"Catamaran",fontSize:`${fsize_rest}px`,color:"#73787c"}}>EDUCATION</Typography></Grid>
                        <Grid item xs={7} sx={{ textAlign: "left" }}>
                            {education.map((edu, id) => (
                                <Box key={id} sx={{mb:3}}>
                                    <Typography sx={{ fontWeight: "bold",fontSize:`${fsize_rest}px`}}>{edu.degree}</Typography>
                                    <Typography sx={{ color: "#38373d",fontSize:`${fsize_rest-2}px`}}>{edu.institute}</Typography>
                                    <Typography sx={{ color: "#38373d",fontSize:`${fsize_rest-2}px`}}>{edu.percentage}%</Typography>
                                    <Typography sx={{ color: "#38373d",fontSize:`${fsize_rest-2}px`}}>{edu.start}-{edu.finish}</Typography>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>

                    <Divider/>

                    <Grid container sx={{mt:5}}>
                        <Grid item xs={5} sx={{ textAlign: "left" }}><Typography sx={{fontFamily:"Catamaran",fontSize:`${fsize_rest}px`,color:"#73787c"}}>SKILLS</Typography></Grid>
                        <Grid item xs={7} sx={{ textAlign: "left" }}>
                            <Grid container columnSpacing={10} rowSpacing={4}>
                            {skills.map((skill, id) => (
                                <Grid item xs={4} sx={{mb:3}}>
                                    <Box key={id}>
                                    <Typography sx={{ fontWeight: "bold",fontSize:`${fsize_rest}px`}}>{skill.skill}</Typography>
                                    <Typography sx={{ color: "#73787c",fontSize:`${fsize_rest-3}px`}}>{skill.level}</Typography>
                                    
                                </Box>
                                </Grid>
                            ))}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Divider/>

                    <Grid container sx={{mt:5}}>
                        <Grid item xs={5} sx={{ textAlign: "left" }}><Typography sx={{fontFamily:"Catamaran",fontSize:`${fsize_rest}px`,color:"#73787c"}}>GITHUB</Typography></Grid>
                        <Grid item xs={7} sx={{ textAlign: "left" }}>
                            <Typography sx={{fontSize:`${fsize_rest}px`,color:`${color}`}}>{links.github}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{mt:2}}>
                        <Grid item xs={5} sx={{ textAlign: "left" }}><Typography sx={{fontFamily:"Catamaran",fontSize:`${fsize_rest}px`,color:"#73787c"}}>LINKED IN</Typography></Grid>
                        <Grid item xs={7} sx={{ textAlign: "left" }}>
                            <Typography sx={{fontSize:`${fsize_rest}px`,color:`${color}`}}>{links.linkedIn}</Typography>
                        </Grid>
                    </Grid>

                </Container>
            </Paper>
        </>
    )
}

export default InTemplate