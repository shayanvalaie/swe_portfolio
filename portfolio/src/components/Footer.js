import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import logo from "../pLogo.png";
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'


const Footer = () => {
    return (
        <Box className="footer">

            <Box>
                <img style={{

                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '55px',
                    height: 'auto'

                }} src={logo} alt="logo" />
            </Box>




            <Box marginTop={2}><Typography sx={{
                color: '#EBE8E6',



            }} variant="body2">Shayan Valaie | 2022</Typography></Box>


            <Box marginTop={1} marginRight={1} sx={{ display: 'flex' }}>

                <a target="_blank" href="https://github.com/"><UseAnimations animation={github} size={40} fillColor="#EBE8E6" strokeColor="#EBE8E6" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/shayan-valaie-14140220b/"><UseAnimations animation={linkedin} size={40} fillColor="#EBE8E6" strokeColor="#EBE8E6" /></a>
            </Box>
        </Box>
















    )
}

export default Footer