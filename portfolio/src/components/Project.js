import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardData } from './CardData';
import Grid from '@mui/material/Grid';
import { IconContext } from 'react-icons';


const Project = () => {
    var cardStyle = {
        backdropFilter: 'blur(10px)'


    }
    return (

        <>


            {
                CardData.map((card, index) => {
                    return (
                        <IconContext.Provider key={index} value={{ color: '#fbf7f5' }}>
                            <Grid item xs={12} sm={4} md={4}>
                                <Card style={cardStyle} elevation={5} sx={{
                                    background: 'transparent',

                                }}>
                                    <CardMedia>
                                        <Typography variant="h1" sx={{


                                            padding: 2

                                        }}>{card.image}</Typography>
                                    </CardMedia>



                                    <CardContent>
                                        <Typography sx={{
                                            color: "#fbf7f5",
                                        }} gutterBottom variant="h5" component="div">
                                            {card.title}
                                        </Typography>
                                        <Typography sx={{
                                            color: "#fbf7f5",
                                        }} variant="body2" color="text.secondary">
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a style={{ textDecoration: 'none' }} href={card.live} target="_blank"><Button sx={{
                                            boxShadow: 5,
                                            border: 0.8,
                                            color: "#fbf7f5"

                                        }} className="button-shadow" variant="outlined" size="small">Live</Button></a>
                                        <a style={{ textDecoration: 'none' }} href={card.gitHub} target="_blank"><Button sx={{
                                            boxShadow: 5,
                                            border: 0.8,
                                            color: "#fbf7f5"

                                        }} className="button-shadow" variant="outlined" size="small">Github</Button></a>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </IconContext.Provider>

                    );
                })
            }
        </>

    )
}

export default Project