import React from 'react'
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



const GridItem = ({ icon, title, body }) => {
    return (
        <>

            <Grid item xs={12} sm={4} md={4}>


                <Box className="circle"><FontAwesomeIcon className="icon" icon={icon} size="2x" /></Box>






                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                    {body}
                </Typography>




            </Grid>

        </>
    )
}

export default GridItem