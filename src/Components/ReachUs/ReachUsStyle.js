import styled from "styled-components";

export const ReachUsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 2rem;
background-color: #FFFBFB;
padding-bottom: 2rem;
position: relative;

@media only screen and (max-width: 900px) {
    flex-direction: column;
}
`

export const HAQContainer = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Heading = styled.div`
color: #025754;
font-weight: bold;
font-size: 2.4rem;
text-align: center;
margin-top: 1rem;
line-height: 4rem;
@media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5rem;
}
`
export const InputContainer = styled.div`
margin-top: 2rem;
display: flex;
align-items: center;
justify-content: center;
width: 50%;
font-size: 1rem;
font-weight: 300;
padding: 0.5rem;
padding-left: 1rem;
box-sizing: border-box;
border-radius: 5rem;
border: none;
box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
background-color: white;
@media only screen and (max-width: 900px) {
    width: 95%;
}
`
export const InputBox = styled.input`
flex: 1;
border: none;
outline: none;
`
export const InputSubmitButton = styled.div`
font-size: 1rem;
font-weight: 500;
background-color: #F24A44;
height: 4rem;
width: 10rem;
justify-content: center;
align-items: center;
display: flex;
color: white;
border-radius: 5rem;
transition-duration: 550ms;
cursor: pointer;
&:hover{
    background-color: red;
    }

@media only screen and (max-width: 900px) {
    height: 3rem;
    &:hover{
    background-color: #F24A44;
    }
}
`
export const VirusImage = styled.img`
width: 50%;
position: absolute;
right: 0;
bottom: 12rem;
right: 5rem;
width: 6rem;
@media only screen and (max-width: 900px) {
    display: none;
}
`
export const VirusHalfImage = styled.img`
width: 50%;
position: absolute;
right: 0;
bottom: 0;
width: 8rem;
@media only screen and (max-width: 900px) {
    display: none;
}
`
export const FooterContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
margin-top: 3rem;
@media only screen and (max-width: 900px) {
    margin-top: 1rem;
    flex-direction: column;
}
`
export const FooterBlocks = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 30%;
@media only screen and (max-width: 900px) {
    margin-top: 2rem;
    width: 100%;
}
`
export const FooterBlocksTwo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 30%;
@media only screen and (max-width: 900px) {
    margin-top: 1rem;
    width: 100%;
}
`
export const FooterText = styled.div`
font-size: 0.8rem;
font-weight: 300;
margin-left: 1rem;
cursor: pointer;
`
export const FooterTextHeading = styled.div`
font-size: 1rem;
font-weight: 500;
margin-left: 1rem;
`
export const FooterLogos = styled.img`
height: 1rem;
width: 1rem;
cursor: pointer;
transition-duration: 500ms;
&:hover{
    scale: 1.5;
}
@media only screen and (max-width: 900px) {
    &:hover{
        scale:1;
    }
}
`
export const FooterLogosHead = styled.img`
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

export const SubText = styled.div`
font-size: 0.8rem;
font-weight: 300;
margin-top: 5rem;
@media only screen and (max-width: 900px) {
    margin-top: 2rem;
}`