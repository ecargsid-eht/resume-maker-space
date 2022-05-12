import { Alert, Box, Button, Container, Snackbar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {

  const [snack,setSnack] = useState(false)

  useEffect(() => {
    if(sessionStorage.getItem("msg") === "success"){
      setSnack(true)
      sessionStorage.removeItem("msg")
    }
  },[])


    const ColorButton = styled(Button)(() => ({
        color: "white",
        width:"300px",
        backgroundColor: "#2dc46a",
        '&:hover': {
          backgroundColor: "#249d55",
        },
        fontFamily:"Catamaran"
      }));
    return (
        <>

            <Box
                // component="img"
                // src="http://blog.storymirror.com/public/uploads/featured-images/original/9ed780bc56c908c2fb4cd2c9deaf8a02.jpg"
                sx={{ width: "100%", zIndex:"-2", height:"100vh", position: "absolute",top:0,background: "linear-gradient(225deg, #2dc46a 0%, #337ab7 100%)"
            }}
            >
            </Box>
           <Container sx={{position:"absolute", top:"30%",left:"12%",textAlign:"center"}}>
           <Typography variant="p" sx={{fontSize: "60px", fontWeight: "bolder" }}>Build your dream CV now.</Typography>
            <Box component="div" sx={{ padding: "10px", textAlign: "center", borderRadius: "18px", width: "70%", fontSize: "21px", fontWeight: "light",marginLeft:"160px",my:2 }}>
               <Typography variant="p" sx={{fontWeight:"200"}}> A Quick and Easy Way to Create Your Professional Resume in just 2 steps. The theme color of resume can be customized to your liking. A very convenient tool designed for you which is totally free. Our resume builder lets you easily and quickly create a resume by just filling the form.</Typography>
            </Box>
            <ColorButton component={Link} to="/choose-template" variant="contained" sx={{  fontSize: "30px", fontWeight: "bolder"}}>Get Started</ColorButton>
            <Snackbar open={snack} autoHideDuration={6000}>
            <Alert severity="success" sx={{ width: '100%' }} onClose={()=>setSnack(false)}>
              Request Sent Successfully.
            </Alert>

            </Snackbar>
           </Container>
        </>
    )
}

export default Home