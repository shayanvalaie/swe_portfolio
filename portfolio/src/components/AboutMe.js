import React from "react";
import author from "../me.png";
import Typed from "react-typed";
import { Typography } from '@mui/material';

const AboutMe = () => {
    return (
        <div id="about" className="about-bg bottom-line">


            <div className="container border-about p-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-6 col-sm-12">
                        <Typography variant="h1"> <Typed
                            className="typed-text"
                            strings={["Hi, My Name is Shayan.", "Welcome to my Portfolio."]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        />
                        </Typography>

                        <p>I'm a Software Engineer from Los Angeles, CA. I have well-rounded experience in Full-Stack Python, Java, and MERN. I have built numerous web applications that range from personal websites to advanced e-commerce web applications. </p>

                    </div>
                    <div className="col-lg-6 center bg-tan col-xm-12">
                        <img className="mt-2 d-block center about-img" src={author} alt="author" />

                    </div>
                </div>
                <hr className="style-eight" />

            </div>




        </div>


    )
}

export default AboutMe
