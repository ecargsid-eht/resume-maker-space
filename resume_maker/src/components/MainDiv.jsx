import { Button, Container, Divider, Grid, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import InTemplate from './templates/InTemplate'
import InTemplateForm from './forms/InTemplateForm'
// import { he } from 'date-fns/locale'
import {ChromePicker} from 'react-color';

function MainDiv() {

  const Typo = styled(Typography)(() => ({
    fontFamily: "Catamaran",
  }))

  const [showpalette,setShowPalette] = useState(false)
  const [color, setColor] = useState("#2dc46a")
  var fsize_name = 30;
  var fsize_rest = 20;
  function printDocument() {
    // const input = document.getElementById('divToPrint');
    // const pdf = new jsPDF("p","pt","a4");
    // pdf.canvas.width = 72*8.5
    // pdf.canvas.height = 72*11
    // var source = document.getElementById("resume").innerHTML
    // console.log(source)
    // pdf.html(source)
    // pdf.save("download.pdf");

    // fsize_name = 20;
    // fsize_rest = 13;
    // if(fsize_name === 20 && fsize_rest === 13){
    //   let pdf = new jsPDF('p', 'pt', 'a4');
    //   pdf.html(document.getElementById('resume'),{
    //   callback: function () {
    //     pdf.save('myDocument.pdf');
    //   }
    // })
    
    window.print();
    
  }

    const [intro, setIntro] = useState({ name: "David Mills", phone: "1122334455", email: "david@mail.com", city: "Ahmedabad", state: "Gujarat" })
    const [skills, setSkills] = useState([{ skill: "Python", level: "Beginner" }])
    const [education, setEducation] = useState([{ degree: "Intermediate", institute: "Don Bosco", percentage: "90", start: "2020", finish: "2022" }])
    const [projects, setProjects] = useState([{ name: "Your Project Name", link: "/Project Link Here/", description: "This is your project description. You can give a summary of your project here." }])
    const [links, setLinks] = useState({ github: "www.github.com/your-username", linkedIn: "www.linkedin.com/your-username" })

    return (
      <>
          <Container maxWidth="xl" >
          <Typo sx={{ mt:3,marginLeft: "30px", fontWeight: "bolder", fontSize: "40px" }}>Step:2 - Fill the Form</Typo>
          <Divider/>
          {/* <ColorPicker width={456} height={228} color={palette} onChange={setPalette} hideHSV dark/> */}
          
          <Grid container spacing={2}>
            <Grid item xs={5}>
            <Button variant="contained" sx={{marginTop:"20px",backgroundColor:"#333333",fontFamily:"Catamaran",color:"white","&:hover":{backgroundColor:"black"}}} onClick={() => setShowPalette(!showpalette)}>CHANGE THEME COLOR</Button>
          {(showpalette === true)&& <>
          <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
          {/* <Typography>Your choice is ${color}</Typography> */}
          </>
          }
              <InTemplateForm printDocument={printDocument} intro={intro} skills={skills} projects={projects} links={links} education={education} setIntro={setIntro} setSkills={setSkills} setProjects={setProjects} setLinks={setLinks} setEducation={setEducation} />
              </Grid>
            <Grid item xs={7}><InTemplate color={color} fsize_name={fsize_name} fsize_rest={fsize_rest} intro={intro} skills={skills} projects={projects} links={links} education={education} /></Grid>
          </Grid>
        </Container>
      </>
    )
  }

  export default MainDiv