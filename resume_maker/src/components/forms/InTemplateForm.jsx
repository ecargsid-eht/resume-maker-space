import React, { useEffect } from 'react'
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField } from '@mui/material'
import { Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Divider } from '@mui/material'
import { useState } from 'react'
import DatePicker from '@mui/lab/DatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const InTemplateForm = ({ printDocument, intro, skills, projects, links, education, setIntro, setSkills, setProjects, setLinks, setEducation }) => {

    let states = [
        {
            "abbreviation": "AN",
            "name": "Andaman and Nicobar Islands"
        },
        {
            "abbreviation": "AP",
            "name": "Andhra Pradesh"
        },
        {
            "abbreviation": "AR",
            "name": "Arunachal Pradesh"
        },
        {
            "abbreviation": "AS",
            "name": "Assam"
        },
        {
            "abbreviation": "BR",
            "name": "Bihar"
        },
        {
            "abbreviation": "CG",
            "name": "Chandigarh"
        },
        {
            "abbreviation": "CH",
            "name": "Chhattisgarh"
        },
        {
            "abbreviation": "DH",
            "name": "Dadra and Nagar Haveli"
        },
        {
            "abbreviation": "DD",
            "name": "Daman and Diu"
        },
        {
            "abbreviation": "DL",
            "name": "Delhi"
        },
        {
            "abbreviation": "GA",
            "name": "Goa"
        },
        {
            "abbreviation": "GJ",
            "name": "Gujarat"
        },
        {
            "abbreviation": "HR",
            "name": "Haryana"
        },
        {
            "abbreviation": "HP",
            "name": "Himachal Pradesh"
        },
        {
            "abbreviation": "JK",
            "name": "Jammu and Kashmir"
        },
        {
            "abbreviation": "JH",
            "name": "Jharkhand"
        },
        {
            "abbreviation": "KA",
            "name": "Karnataka"
        },
        {
            "abbreviation": "KL",
            "name": "Kerala"
        },
        {
            "abbreviation": "LD",
            "name": "Lakshadweep"
        },
        {
            "abbreviation": "MP",
            "name": "Madhya Pradesh"
        },
        {
            "abbreviation": "MH",
            "name": "Maharashtra"
        },
        {
            "abbreviation": "MN",
            "name": "Manipur"
        },
        {
            "abbreviation": "ML",
            "name": "Meghalaya"
        },
        {
            "abbreviation": "MZ",
            "name": "Mizoram"
        },
        {
            "abbreviation": "NL",
            "name": "Nagaland"
        },
        {
            "abbreviation": "OR",
            "name": "Odisha"
        },
        {
            "abbreviation": "PY",
            "name": "Puducherry"
        },
        {
            "abbreviation": "PB",
            "name": "Punjab"
        },
        {
            "abbreviation": "RJ",
            "name": "Rajasthan"
        },
        {
            "abbreviation": "SK",
            "name": "Sikkim"
        },
        {
            "abbreviation": "TN",
            "name": "Tamil Nadu"
        },
        {
            "abbreviation": "TS",
            "name": "Telangana"
        },
        {
            "abbreviation": "TR",
            "name": "Tripura"
        },
        {
            "abbreviation": "UP",
            "name": "Uttar Pradesh"
        },
        {
            "abbreviation": "UK",
            "name": "Uttarakhand"
        },
        {
            "abbreviation": "WB",
            "name": "West Bengal"
        }
    ]



    const [activeCard, setActiveCard] = useState("introduction")
    const [form, setForm] = useState()

    const Typo = styled(Typography)(() => ({
        fontFamily: "Catamaran",
    }))

    const handleProject = (i, e) => {
        const { name, value } = e.target;
        const list = [...projects]
        list[i][name] = value
        setProjects(list)
    }

    const handleSkills = (i, e) => {
        const { name, value } = e.target;
        const list = [...skills]
        list[i][name] = value
        setSkills(list)
    }


    const handleEducation = (i, e, n = null) => {
        let name
        let value
        if (n !== null) {
            name = n
            value = String(e.getFullYear())
        }
        else {
            name = e.target.name
            value = e.target.value
        }
        const list = [...education]
        list[i][name] = value
        setEducation(list)
    }

    const formHandler = () => {
        setForm({
            intro: intro,
            projects: projects,
            education: education,
            skills: skills,
            links: links
        })

        console.log(form)
    }


    const ColorButton = styled(Button)(() => ({
        color: "white",
        backgroundColor: "#2dc46a",
        '&:hover': {
            backgroundColor: "#249d55",
        },
        fontFamily: "Catamaran"
    }))
    return (
        <>
            {(activeCard === "introduction") && <>
                <Paper elevation={3} sx={{ mt: 3, mb: 3, paddingY: 4 }}>
                    <Typo sx={{ marginLeft: 3, fontWeight: "bolder", fontSize: "30px" }}>Enter Details</Typo>
                    <Divider variant="middle" />
                    <Box
                        //   id="introduction"
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, mt: 3, width: '70%' },
                            textAlign: "center"
                        }}
                        margin="auto"
                        noValidate
                        autoComplete="off"
                    >

                        <TextField
                            sx={{ margin: "auto" }}
                            label="Full Name"
                            id="outlined-size-small"
                            value={intro.name}
                            onChange={(e) => setIntro({ ...intro, name: e.target.value })}
                            required
                            size="normal"
                        />

                        <TextField
                            sx={{ margin: "auto" }}
                            label="Phone"
                            id="outlined-size-small"
                            value={intro.phone}
                            onChange={(e) => setIntro({ ...intro, phone: e.target.value })}
                            required
                            size="normal"
                        />
                        <TextField
                            sx={{ margin: "auto" }}
                            label="Email"
                            id="outlined-size-small"
                            value={intro.email}
                            onChange={(e) => setIntro({ ...intro, email: e.target.value })}
                            required
                            size="normal"
                        />
                        <Grid container maxWidth="xl">

                            <Grid item xl={6}>
                                <TextField
                                    fullWidth
                                    select
                                    label="State"
                                    id="outlined-size-small"
                                    value={intro.state}
                                    onChange={(e) => setIntro({ ...intro, state: e.target.value })}
                                    required
                                    size="normal"
                                >
                                    <MenuItem defaultValue={0} selected>Select a State</MenuItem>
                                    {states.map((st) => (
                                        <MenuItem value={st.name}>{st.name}</MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item xl={6}>
                                <TextField
                                    fullWidth
                                    label="City"
                                    id="outlined-size-small"
                                    value={intro.city}
                                    onChange={(e) => setIntro({ ...intro, city: e.target.value })}
                                    required
                                    size="normal"
                                />
                            </Grid>
                        </Grid>

                        <ColorButton onClick={() => setActiveCard("projects")} variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}>Go Ahead</Typo>
                        </ColorButton>

                    </Box>
                </Paper>
            </>}

            {/* Projects Section Here */}

            {(activeCard === "projects") && <>
                <Paper elevation={3} sx={{ mt: 3, mb: 3, paddingY: 4 }}>
                    <Typo sx={{ marginLeft: 3, fontWeight: "bolder", fontSize: "30px" }}>Add Projects</Typo>
                    <Divider variant="middle" />
                    <Box
                        //   id="introduction"
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, mt: 3, width: '70%' },
                            textAlign: "center"
                        }}
                        margin="auto"
                        noValidate
                        autoComplete="off"
                    >

                        {projects.map((project, index) => (
                            <div key={index}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <TextField
                                            sx={{ margin: "auto" }}
                                            label="Add Project Name"
                                            id="outlined-size-small"
                                            value={project.name}
                                            name="name"
                                            onChange={(e) => handleProject(index, e)}
                                            size="normal"

                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            sx={{ margin: "auto" }}
                                            label="Project Link"
                                            id="outlined-size-small"
                                            name="link"
                                            value={project.link}
                                            onChange={(e) => handleProject(index, e)}
                                            size="normal"

                                        />
                                    </Grid>
                                </Grid>
                                <TextField
                                    sx={{ margin: "auto" }}
                                    label="Project Description"
                                    multiline
                                    rows={4}
                                    id="outlined-size-small"
                                    name="description"
                                    size="normal"
                                    value={project.description}
                                    onChange={(e) => handleProject(index, e)}
                                />
                                <Divider />
                            </div>
                        ))}



                        <Button onClick={() => setProjects([...projects, { name: "", link: "", description: "" }])} variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}>ADD MORE</Typo>
                        </Button>
                        <ColorButton onClick={() => setActiveCard("education")} variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}> Go Ahead</Typo>
                        </ColorButton>
                        <Button onClick={() => setActiveCard("introduction")} color="error" variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}>Go Back</Typo>
                        </Button>

                    </Box>
                </Paper>
            </>}

            {/* Education Section Here */}

            {(activeCard === "education") && <>
                <Paper elevation={3} sx={{ mt: 3, mb: 3, paddingY: 4 }}>
                    <Typo sx={{ marginLeft: 3, fontWeight: "bolder", fontSize: "30px" }}>Add Education</Typo>
                    <Divider variant="middle" />
                    <Box
                        //   id="introduction"
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, mt: 3, width: '70%' },
                            textAlign: "center"
                        }}
                        margin="auto"
                        noValidate
                        autoComplete="off"
                    >

                        {education.map((education, i) => (
                            <>
                                <Grid container >
                                    <Grid item xs={6}>
                                        <TextField
                                            sx={{ margin: "auto" }}
                                            label="Add Degree"
                                            id="outlined-size-small"
                                            size="normal"
                                            name="degree"
                                            value={education.degree}
                                            onChange={(e) => handleEducation(i, e)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            sx={{ margin: "auto" }}
                                            label="Add Institute"
                                            id="outlined-size-small"
                                            size="normal"
                                            name="institute"
                                            value={education.institute}
                                            onChange={(e) => handleEducation(i, e)}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            sx={{ margin: "auto" }}
                                            label="Percentage"
                                            id="outlined-size-small"
                                            size="normal"
                                            name="percentage"
                                            value={education.percentage}
                                            onChange={(e) => handleEducation(i, e)}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        {/* <TextField
                                            sx={{ margin: "auto" }}
                                            label="Starting year"
                                            id="outlined-size-small"
                                            size="normal"
                                            name="start"
                                            value={education.start}
                                            onChange={(e) => handleEducation(i, e)}
                                        /> */}

                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <Stack spacing={3}>
                                                <DatePicker
                                                    views={['year']}
                                                    label="Starting Year"
                                                    value={education.start}
                                                    onChange={(e) => handleEducation(i, e, "start")}
                                                    renderInput={(params) => <TextField {...params} helperText={null} />}
                                                />
                                            </Stack>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={4}>
                                        {/* <TextField
                                            sx={{ margin: "auto" }}
                                            label="Finishing Year (or expected)"
                                            id="outlined-size-small"
                                            size="normal"
                                            name="finish"
                                            onChange={(e) =>  handleEducation(i,e)}
                                        /> */}
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <Stack spacing={3}>
                                                <DatePicker
                                                    views={['year']}
                                                    label="Finishing Year"
                                                    value={education.finish}
                                                    onChange={(e) => handleEducation(i, e, "finish")}
                                                    renderInput={(params) => <TextField {...params} helperText={null} />}
                                                />
                                            </Stack>
                                        </LocalizationProvider>

                                    </Grid>
                                </Grid>

                                <Divider />
                            </>
                        ))}



                        <Button onClick={() => setEducation([...education, { degree: "", institute: "", percentage: "", start: "", finish: "" }])} variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}>ADD MORE</Typo>
                        </Button>
                        <ColorButton onClick={() => setActiveCard("skills")} variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}> Go Ahead</Typo>
                        </ColorButton>
                        <Button onClick={() => setActiveCard("projects")} color="error" variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}>Go Back</Typo>
                        </Button>

                    </Box>
                </Paper>
            </>}



            {/* Skills Part Here */}

            {(activeCard === "skills") && <>
                <Paper elevation={3} sx={{ mt: 3, mb: 3, paddingY: 4 }}>
                    <Typo sx={{ marginLeft: 3, fontWeight: "bolder", fontSize: "30px" }}>Add Skills</Typo>
                    <Divider variant="middle" />
                    <Box
                        //   id="introduction"
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, mt: 3, width: '70%' },
                            textAlign: "center"
                        }}
                        margin="auto"
                        noValidate
                        autoComplete="off"
                    >

                        {skills.map((skill, i) => (
                            <Grid container maxWidth="xl" key={i}>
                                <Grid item xl={6}>
                                    <TextField
                                        fullWidth
                                        label="Skill"
                                        id="outlined-size-small"
                                        required
                                        name="skill"
                                        size="normal"
                                        value={skill.skill}
                                        onChange={(e) => handleSkills(i, e)}

                                    />
                                </Grid>
                                <Grid item xl={4}>
                                    <Box sx={{ minWidth: 120, mt: 3 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Level</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Level"
                                                name="level"
                                                onChange={(e) => handleSkills(i, e)}

                                            >
                                                <MenuItem value="Beginner" selected>Beginner</MenuItem>
                                                <MenuItem value="Intermediate">Intermediate</MenuItem>
                                                <MenuItem value="Advanced">Advanced</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>

                        ))}
                        <Button onClick={() => setSkills([...skills, { skill: "", level: "" }])} variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}>ADD MORE</Typo>
                        </Button>

                        <ColorButton onClick={() => setActiveCard("links")} variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}> Go Ahead</Typo>
                        </ColorButton>

                        <Button onClick={() => setActiveCard("education")} color="error" variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}>Go Back</Typo>
                        </Button>

                    </Box>
                </Paper>
            </>}

            {/* Add Links Here */}

            {(activeCard === "links") && <>
                <Paper elevation={3} sx={{ mt: 3, mb: 3, paddingY: 4 }}>
                    <Typo sx={{ marginLeft: 3, fontWeight: "bolder", fontSize: "30px" }}>Add Links</Typo>
                    <Divider variant="middle" />
                    <Box
                        //   id="introduction"
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, mt: 3, width: '70%' },
                            textAlign: "center"
                        }}
                        margin="auto"
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            fullWidth
                            label="Github"
                            id="outlined-size-small"
                            size="normal"
                            value={links.github}
                            onChange={(e) => setLinks({ ...links, github: e.target.value })}
                        />

                        <TextField
                            fullWidth
                            label="Linked In"
                            id="outlined-size-small"
                            size="normal"
                            value={links.linkedIn}
                            onChange={(e) => setLinks({ ...links, linkedIn: e.target.value })}
                        />

                        <Button onClick={() => setActiveCard("skills")} color="error" variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}>Go Back</Typo>
                        </Button>

                        <ColorButton onClick={printDocument} variant="contained" size="small" sx={{ width: "80%", mt: 2, py: 0 }}>
                            <Typo sx={{ fontSize: "30px" }}>DOWNLOAD RESUME</Typo>
                        </ColorButton>

                    </Box>
                </Paper>
            </>}

        </>
    )
}

export default InTemplateForm