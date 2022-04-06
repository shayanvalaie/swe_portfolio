import React, { useState } from 'react'
import styled, { css } from 'styled-components/macro';
import logo from "../pLogo.png";
import { menuData } from './MenuData'
import { FaBars } from 'react-icons/fa'
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    
    
    


`;

const NavLink = css`
    
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #2A2A2C;
    }
`

const Logo = styled(Link)`
    ${NavLink};
    

`;

const LogoImg = styled.img`
    margin-top: 10px;
    width:75px;
    height:auto;

`

const MenuBars = styled(FaBars)`
    display: none;
    
    
    
    @media screen and (max-width:768px){
        display: block;
        color: white;
        cursor: pointer;
        margin-top: 7px;
    
        
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width:768px){
        display: none;
    }
        
`;

const NavMenuLinks = styled(Link)`

    ${NavLink}
    justify-self: flex-end;
    
`

const Navbar = ({ toggle }) => {

    const [navbar, setNavbar] = useState(false)


    const changeBackground = () => {
        if (window.scrollY >= 75) {
            setNavbar(true)

        } else {
            setNavbar(false)
        }

    }

    window.addEventListener('scroll', changeBackground)
    return (

        <Nav className={navbar ? 'active' : ''}>
            < Logo >

                <LogoImg className="" src={logo} alt="logo" />

            </Logo >
            <MenuBars style={{ justifyContent: 'flex-end' }} onClick={toggle} />
            <NavMenu>


                {menuData.map((item, index) => (
                    <NavMenuLinks spy={true}
                        smooth={true}
                        offset={-50}

                        duration={200} to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}

            </NavMenu>

        </Nav >

    )
}

export default Navbar