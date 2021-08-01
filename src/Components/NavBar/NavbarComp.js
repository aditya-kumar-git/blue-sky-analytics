import AppImages from 'Images'
import React from 'react'
import { NavIcon, NavLogo, NavTextHeading, NavBlocks, NavContainer, NavText, GlobalStyle, NavTextSelected, DotText, NavButton } from './NavBarStyle'
import { HashLink } from 'react-router-hash-link';

export default function NavbarComp() {
    return (
        <NavContainer>
            <GlobalStyle />
            <NavIcon>

                <NavLogo src={AppImages.FooterVirus} />
                <NavTextHeading>Covid - 19</NavTextHeading>

            </NavIcon>
            <NavBlocks>
                <NavTextSelected>Overview <DotText>•</DotText> </NavTextSelected>
                <HashLink to='#contagion' >
                    <NavText>
                        Contagion
                    </NavText>
                </HashLink>
                <HashLink to='#symptoms' >
                    <NavText>
                        Symptoms
                    </NavText>
                </HashLink>
                <HashLink to='#prevention' >
                    <NavText>
                        Prevention
                    </NavText>
                </HashLink>
                <NavButton>Contact</NavButton>
            </NavBlocks>
        </NavContainer>
    )
}
