import styled from "styled-components";

export const LandingContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 2rem;
padding-bottom: 2rem;

@media only screen and (max-width: 900px) {
    padding-top: 0rem;
    flex-direction: column;
}
`
export const LandingContainerTwo = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
padding-top: 2rem;
padding-bottom: 2rem;
position: relative;
@media only screen and (max-width: 900px) {
    padding-top: 0rem;
}
`
export const DataContainer = styled.div`
display: flex;
flex-direction: column;
text-align:center;
width: 100%;
text-transform: capitalize;
@media only screen and (max-width: 900px) {
    padding-left: 0%;
    padding-right: 0%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
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
    text-align: center;
    font-size: 1.2rem;
}
`
export const Heading = styled.div`
color: #025754;
font-weight: bold;
font-size: 2.4rem;
text-transform: capitalize;
margin-top: 1rem;
@media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0.5rem;
}
`
export const SubText = styled.div`
font-size: 0.8rem;
font-weight: 300;
margin-top: 2rem;
line-height: 215%;
@media only screen and (max-width: 900px) {
    margin-top: 1rem;
    text-align: center;
}
`
export const IllustrationContainer = styled.img`
width: 80%;
@media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 0rem;
}
`

export const CardContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 4rem;
margin-bottom: 4rem;
padding-left: 15%;
padding-right: 15%;
position: relative;
@media only screen and (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    margin-bottom: 0rem;
}
`

export const Card = styled.div`
box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
width: 28%;
padding: 2rem;
box-sizing: border-box;
z-index: 1;
background-color: white;
border-bottom: 0.3rem solid rgba(0,0,0,0) ;
transition-duration: 550ms;
&:hover{
    border-bottom: 0.3rem #FB4C47 solid;
    .CardImageClass{
        transform: translateY(-0.8rem);
    }
}
@media only screen and (max-width: 900px) {
    width: 90%;
    margin-bottom: 2rem;
    &:hover{
    border-bottom: 0.3rem solid rgba(0,0,0,0) ;
    .CardImageClass{
        transform: translateY(0rem);
    }
}
}
`

export const CardHeading = styled.div`
color: #025754;
font-weight: bold;
font-size: 1.5rem;
text-transform: capitalize;
margin-top: 1rem;
@media only screen and (max-width: 900px) {
    text-align: center;
}
`
export const CardImage = styled.img`
width: 80%;
transition-duration: 550ms;
@media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 1rem;
}
`
export const CardVirus = styled.img`
position: absolute;
width: 16rem;
left: 15%;
z-index: 0;
bottom: 0;
transform: translateX(-8.5rem);
@media only screen and (max-width: 900px) {
    display: none;
}
`