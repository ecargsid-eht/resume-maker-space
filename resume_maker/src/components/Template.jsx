import { Button, Container, Divider, IconButton, ImageList, ImageListItem, Paper, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import {Link} from 'react-router-dom';

function Template() {
  const [hoverEffect, setHoverEffect] = useState(false)
  const hoverHandle = (data) => {
    setHoverEffect(data)
  }

  const Typo = styled(Typography)(() => ({
    fontFamily: "Catamaran",
  }))

  const itemData = [
    {
      img: require("../cv_images/0001.jpg"),
      title: 'Breakfast',
    },
    
  ];


  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Typo sx={{ marginLeft: "30px", fontWeight: "bolder", fontSize: "40px" }}>Step:1 - Choose From Templates</Typo>
        <Divider />
        {/* <Paper elevation={3} sx={{padding:"10px"}}> */}
        <ImageList sx={{ width: "100%" }} cols={3} gap={2}>
          {itemData.map((item) => (
            <>
              <Button component={Link} to="/choose-template/in-template" className="chooseTemp" variant="contained" sx={{ width: "250px",backgroundColor: "#2dc46a", paddingY: "10px", position: 'absolute', top: "70%", left: "10%", zIndex: "2", visibility: `${(hoverEffect === false) && "hidden"}`, filter: `${(hoverEffect === true) && "blur(0px)"}`, "&:hover": {backgroundColor: "#249d55", visibility: "visible" } }}><Typo sx={{ fontSize: "23px" }}>Choose Template</Typo></Button>

              <Box className="temp" onMouseEnter={() => hoverHandle(true)} onMouseOut={() => hoverHandle(false)} sx={{ width: "100%", boxShadow: 3, "&:hover": { cursor: "pointer", filter: "blur(2px)" } }} marginY={2}>

                <ImageListItem key={item.img} sx={{ width: "100%", }}>
                  <img
                    src={require("../cv_images/cv1.jpg")}
                    alt={item.title}
                    loading="lazy"
                    style={{ border: "1px solid #eee" }}
                  />

                </ImageListItem>
              </Box>
            </>
          ))}
        </ImageList>
        {/* </Paper> */}
      </Container>
    </>
  )
}

export default Template