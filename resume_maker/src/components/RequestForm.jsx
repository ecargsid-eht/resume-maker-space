import { Card, CardHeader, Typography, Container, CardContent, Divider, TextField, Button,CardActions } from '@mui/material'
import { styled } from '@mui/material/styles';
import axios from 'axios';


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function RequestForm() {
    const Typo = styled(Typography)(() => ({
        fontFamily: "Catamaran",
    }))


    const nav = useNavigate()

    const ColorButton = styled(Button)(() => ({
        color: "white",
        backgroundColor: "#2dc46a",
        '&:hover': {
            backgroundColor: "#249d55",
        },
        fontFamily: "Catamaran"
    }))

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");


    function clickHandler(){ 
        const data = new FormData
        data.append("name",name)
        data.append("email",email)
        data.append("image",image)
        data.append("description",description)
        console.log(image)
        axios.post("http://localhost:8000/api/requests",data).then((res)=> {
            if(res.data.response === 'success'){
                sessionStorage.setItem("msg","success");
                nav("/")
            }
        })
        
    }


    return (
        <div>
            <Container maxWidth="sm" sx={{ marginTop: "30px" }}>
                <Card>
                    <CardContent>
                        <Typo sx={{ fontSize: "30px", color: "black" }}>Request a Template Here.</Typo>
                        <Divider sx={{ mb: "20px" }} />

                        <TextField
                            // size='small'
                            label="Enter your name."
                            placeholder="Eg. Amrit Utsav"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />

                        <TextField
                            sx={{ marginTop: "30px" }}
                            // size='small'
                            label="Enter your email."
                            placeholder="Eg. amrit@gmail.com"
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />
                        {/* <TextField
                            type="file"
                            sx={{ marginTop: "30px" }}
                            // size='small'
                            onChange={(e)=> setImage(e.target.files[0])}
                            label="Attach screenshot of template"
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        /> */}

                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />


                        <TextField
                            sx={{ marginTop: "30px" }}
                            label="Enter Description"
                            placeholder='Enter description or special request(optional)'
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />

                    </CardContent>
                    
                    <CardActions>
                        <ColorButton variant="contained" onClick={()=>clickHandler()} fullWidth sx={{fontSize:"20px",mx:"7px",mb:"10px"}}>Send Request</ColorButton>
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
}

export default RequestForm