import styled from "styled-components";

export const LandingContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 2rem;
background-color: #FEFDFD;
padding-bottom: 2rem;

@media only screen and (max-width: 900px) {
    flex-direction: column;
}
`
export const LandingContainerTwo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 2rem;
position: relative;
padding-bottom: 2rem;
@media only screen and (max-width: 900px) {
    padding-bottom: 0rem;
    flex-direction: column-reverse;
}
`

export const DataContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;
padding-left: 10%;
padding-right: 5%;
@media only screen and (max-width: 900px) {
    padding-left: 0%;
padding-right: 0%;
width: 100%;
justify-content: center;
align-items: center;
}
`

export const DataContainerTwo = styled.div`
display: flex;
flex-direction: column;
width: 50%;
padding-right: 10%;
padding-left: 5%;
@media only screen and (max-width: 900px) {
    padding-left: 0%;
padding-right: 0%;
width: 100%;
justify-content: center;
align-items: center;
}
`
export const SubHeading = styled.div`
color: #FA5652;
font-size: 1.4rem;
font-weight: 700;
@media only screen and (max-width: 900px) {
    font-size: 1.2rem;
    text-align: center;
}
`

export const Heading = styled.div`
color: #025754;
font-weight: bold;
font-size: 2.4rem;
text-transform: capitalize;
margin-top: 1rem;
@media only screen and (max-width: 900px) {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 1.5rem;
}
`

export const SubText = styled.div`
font-size: 0.8rem;
font-weight: 300;
margin-top: 2rem;
line-height: 215%;
@media only screen and (max-width: 900px) {
    text-align: center;
    margin-top: 1rem;
    width: 90%;
}
`

export const SolidButtonContainer = styled.div`
display: flex;
`

export const SolidButton = styled.div`
margin-top: 2rem;
background-color: #FB4C47;
color: white;
padding: 1rem;
padding-left: 2rem;
padding-right: 2rem;
font-weight: bold;
border-radius: 1.5rem;
cursor: pointer;
transition-duration: 550ms;
font-size: 1rem;
&:hover
    {
        background-color: red;
    }
&:active{
    opacity: 0.3;
}
@media only screen and (max-width: 900px) {
    margin-top: 1rem;
    font-size: 0.8rem;
    &:hover
    {
        background-color: #FB4C47;
    }
}
`
export const LightButton = styled.div`
margin-top: 2rem;
background-color: #fa565226;
color: #FB4C47;
padding: 1rem;
padding-left: 2rem;
padding-right: 2rem;
font-weight: bold;
border-radius: 1.5rem;
cursor: pointer;
transition-duration: 550ms;
&:active{
    opacity: 0.3;
}
&:hover
    {
        background-color: #FB4C47;
        color: white;
    }
    @media only screen and (max-width: 900px) {
        margin-top: 1rem;
        font-size: 0.8rem;
        &:hover
    {
        background-color: #fa565226;
        color: #FB4C47;
    }
}
`
export const IllustrationContainer = styled.img`
width: 50%;
@media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 1.5rem;
}
`

export const VirusImage = styled.img`
width: 50%;
position: absolute;
right: 2rem;
bottom: 0;
width: 6rem;
@media only screen and (max-width: 900px) {
    display: none;
}
`
export const VirusHalfImage = styled.img`
width: 50%;
position: absolute;
right: 0;
bottom: 5rem;
width: 8rem;
@media only screen and (max-width: 900px) {
    display: none;
}
`
