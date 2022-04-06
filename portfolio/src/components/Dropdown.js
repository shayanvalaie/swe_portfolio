import React from 'react'
import styled from 'styled-components';
import { menuData } from './MenuData';
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'


const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0e1111;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`


const CloseIcon = styled(FaTimes)`
    color: #fbf7f5;
    

`


const DropdownWrapper = styled.div``


const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width:480px){
        grid-template-rows: repeat(4,60px);
    }

`

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fbf7f5;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #fbf7f5;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    
    &:hover {
        color: #2A2A2C;
    }

`



const Dropdown = ({ toggle, isOpen }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink onClick={toggle} spy={true}
                            smooth={true}
                            offset={-50}

                            duration={200} to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>

            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
