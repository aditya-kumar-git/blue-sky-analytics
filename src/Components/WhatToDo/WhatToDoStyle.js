import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 2rem;
padding-bottom: 2rem;

@media only screen and (max-width: 900px) {
    flex-direction: column;
}
`
export const LandingContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 2rem;
padding-bottom: 2rem;
position: relative;
@media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
}
`
export const LandingContainerTwo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 2rem;
padding-bottom: 2rem;
position: relative;
@media only screen and (max-width: 900px) {
    flex-direction: column;
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
export const DataContainerThree = styled.div`
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
export const SubHeading = styled.div`
color: #FA5652;
font-size: 1.4rem;
font-weight: 700;
@media only screen and (max-width: 900px) {
    font-size: 1.2rem;
    text-align: center;
}
`
export const HeadingContainer = styled.div`
display: flex;
align-items: flex-start;
overflow-y: auto;

`
export const TextContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
export const Heading = styled.div`
color: #025754;
font-weight: bold;
font-size: 2.4rem;
text-transform: capitalize;
margin-top: 1rem;
@media only screen and (max-width: 900px) {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    text-align: center;
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
    width: 90%;
}
`
export const IllustrationContainer = styled.img`
width: 50%;
@media only screen and (max-width: 900px) {
    width: 80%;
    margin-top: 1rem;
}
`
export const NumberContainer = styled.div`
margin-top: 1rem;
background-color: #fa565226;
color: #FB4C47;
font-size: 2rem;
font-weight: bold;
min-height: 4rem;
min-width: 4rem;
margin-right: 1rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
@media only screen and (max-width: 900px) {
    display: none;
}
`

export const VirusImageLeft = styled.img`
position: absolute;
left: 0;
bottom: 0;
width: 6rem;
@media only screen and (max-width: 900px) {
    display: none;
}
`
export const VirusImageRight = styled.img`
position: absolute;
right: 0;
bottom: 10rem;
width: 8rem;
@media only screen and (max-width: 1200px) {
    display: none;
}
`
export const VirusImageRightSmall = styled.img`
position: absolute;
right: 2rem;
bottom: 30rem;
width: 6rem;
@media only screen and (max-width: 900px) {
    display: none;
}
`