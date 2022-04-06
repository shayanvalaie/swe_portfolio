import React from "react"
import { Typography } from '@mui/material';


const Header = () => {

    return (

        <div id="header" className="header-wraper">


            <div className="main-info">
                <Typography variant="p" sx={{
                    color: "#fbf7f5",
                    fontSize: '40px'
                }} className="bold">Web Development and Web Design</Typography>


            </div>

            <div className="l-container">
                <div className="lines">
                    <div className="diamond"></div>
                </div>
            </div>



        </div>
    )
}

export default Header

