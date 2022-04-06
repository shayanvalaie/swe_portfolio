import React from 'react'
import Project from '../components/Project'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const Portfolio = () => {
    return (

        <Box id="projects" className="portfolio-bg">
            <Container>
                <Grid sx={{
                    paddingBottom: 8
                }} style={{
                    marginTop: '0.0625rem',

                }} className="center-form" container spacing={5}>

                    <Project />



                </Grid>
            </Container>
        </Box>

    )
}

export default Portfolio