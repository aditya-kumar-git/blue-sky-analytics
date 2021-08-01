import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 a{
     text-decoration: none;
 }
 `

export const NavContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
margin-top: 3rem;
padding-left: 10%;
padding-right: 10%;
box-sizing: border-box;
@media only screen and (max-width: 900px) {
    margin-top: 1rem;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
}
`
export const NavIcon = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
@media only screen and (max-width: 900px) {
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
}
`
export const NavLogo = styled.img`
height: 2rem;
width: 2rem;
cursor: pointer;
transition-duration: 500ms;
&:hover{
    scale: 1.2;
}
@media only screen and (max-width: 900px) {
    &:hover{
        scale:1;
    }
}
`
export const NavTextHeading = styled.div`
font-size: 1rem;
font-weight: 500;
margin-left: 1rem;
`
export const NavBlocks = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

@media only screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
}
`
export const NavText = styled.div`
font-size: 0.8rem;
font-weight: 500;
margin-left: 1rem;
cursor: pointer;
transition-duration: 500ms;
color: black;
&:hover{
    color: #FA5652;
}
@media only screen and (max-width: 900px) {
    margin-left: 0;
    margin-top: 0.8rem;
    &:hover{
    color: black;
}
}

`
export const NavTextSelected = styled.div`
font-size: 0.8rem;
font-weight: 500;
margin-left: 1rem;
cursor: pointer;
color: #FA5652;
text-align: center;
position: relative;
@media only screen and (max-width: 900px) {
    margin-left: 0;
    margin-top: 0.8rem;
}
`
export const DotText = styled.div`
font-size: 1.2rem;
position: absolute;
width: 100%;
@media only screen and (max-width: 900px) {
    display: none;
}
`
export const NavButton = styled.div`
font-size: 0.8rem;
border: 1px #FA5652 solid;
border-radius: 1.5rem;
display: flex;
align-items: center;
justify-content: center;
padding: 0.7rem;
padding-left: 1.5rem;
padding-right: 1.5rem;
color: #FA5652;
transition-duration: 500ms;
font-weight: 500;
cursor: pointer;
margin-left: 1rem;
&:hover{
    background-color: #FA5652;
    color: white;
}
@media only screen and (max-width: 900px) {
    margin-left: 0;
    margin-top: 0.8rem;
    &:hover{
    background-color: white;
    color: #FA5652;
    }
}
&:active{
    opacity: 0.3;
}
`
