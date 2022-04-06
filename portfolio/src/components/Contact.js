import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';


import emailjs from "emailjs-com";


const Contact = () => {


    const form = useRef();
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors }, } = useForm();



    const serviceID = "service_utmpeng";
    const templateID = "template_nctmzld";
    const userID = "HY5KJwrbo9eTeAd62";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
            },
            userID
        )
        r.target.reset();
    }




    // send email


    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Sent successfully! I will contact you as soon as possible!");
            }).catch(err => console.error(`Something went wrong ${err}`));
    };



    return (
        <Container id="contact">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <Grid container padding={2}

                    className="center-form" >
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography sx={{
                            textShadow: '1px 1px 5px rgb(0 0 0 / 50%)'
                        }} variant="h4">
                            Contact
                        </Typography>
                        <Typography sx={{
                            marginTop: '10px'
                        }} variant="h6">{successMessage}</Typography>
                        <span className="error-message">

                            <p> {errors.name && errors.name.message} </p>
                            <p> {errors.email && errors.email.message} </p>
                            <p> {errors.subject && errors.subject.message} </p>
                            <p> {errors.message && errors.message.message} </p>
                        </span>

                    </Grid>



                    <Grid item xs={12} md={6}>




                        <Box>

                            <TextField sx={{
                                marginBottom: 2,

                            }} {
                                ...register("name", {
                                    required: "* Please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message: "Name must not be longer than 20 characters",
                                    }
                                })
                                } fullWidth={true} id="standard-basic" label="Name" name="name" variant="standard" />

                            <br />
                            <TextField sx={{
                                marginBottom: 2
                            }} {
                                ...register("email", {
                                    required: "* Please enter a valid email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "* Invalid Email"
                                    }
                                })
                                } fullWidth={true} id="standard-basic" label="Email" name="email" variant="standard" />

                            <br />
                            <TextField sx={{
                                marginBottom: 2
                            }} {
                                ...register("subject", {
                                    required: "* Please enter a subject",
                                    maxLength: {
                                        value: 20,
                                        message: "* Subject must not be longer than 20 characters",
                                    }
                                })
                                } fullWidth={true} id="standard-basic" label="Subject" name='subject' variant="standard" />

                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Box sx={{
                            marginTop: 13.2,

                        }}>

                            <TextField multiline
                                minRows={2}
                                maxRows={4} sx={{
                                    marginBottom: 2,
                                    width: '85%'



                                }} {
                                ...register("message", {
                                    required: "* Please enter a message",

                                })
                                } id="standard-basic" label="Message" name='message' variant="standard"
                            />




                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button type="submit" className='button-shadow' sx={{
                            border: 1,
                            width: '85%',



                        }} variant="outlined">Send</Button>
                    </Grid>
                </Grid>
            </form >
        </Container>



    )
}

export default Contact