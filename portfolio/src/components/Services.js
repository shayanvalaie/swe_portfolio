import React from 'react'
import GridItem from './GridItem'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';




const Services = () => {
    return (
        <div id="services">
            <Box sx={{ marginBottom: 2 }} className="services container border-service p-5">
                <Grid container spacing={2}>








                    <GridItem icon={faDesktop} title="Web Design" body="Experienced in creating captivating and dynamic User Interfaces" />
                    <GridItem icon={faGoogle} title="Google Ads" body="Take your business to the next level with Google Ads that incorporate  Machine Learning and Artificial Intelligence" />
                    <GridItem icon={faFileCode} title="SEO" body="With an internet so vast, make sure that your Website shows up first in any search bar" />


                </Grid>





            </Box>







        </div >




    )
}

export default Services
