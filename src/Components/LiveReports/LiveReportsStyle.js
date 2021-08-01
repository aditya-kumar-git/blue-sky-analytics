import styled from "styled-components";

export const LiveReportContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;

@media only screen and (max-width: 900px) {
    flex-direction: column;
}
`
export const ReportListContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
@media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 4rem;
}
`
export const ReportList = styled.div`
width: 70%;
background-color: white;
padding: 1rem;
box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
@media only screen and (max-width: 900px) {
    width: 90%;
}
`

export const IllustrationContainer = styled.img`
width: 50%;
@media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 1rem;
}
`
export const Heading = styled.div`
color: #025754;
font-weight: bold;
font-size: 2rem;
text-transform: capitalize;
margin-top: 1rem;
@media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 1.5rem;
}
`
export const CountryDataContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 1rem;
`
export const CountryDataName = styled.div`
font-weight: 500;
font-size: 1.2rem;
text-transform: capitalize;
color: black;
margin-left: 0.5rem;
cursor: pointer;
@media only screen and (max-width: 900px) {
    font-size: 1rem;
}
`
export const CountryDataDeath = styled.div`
font-weight: 500;
font-size: 1.2rem;
text-transform: capitalize;
color: black;
@media only screen and (max-width: 900px) {
    font-size: 1rem;
}
`
export const CountryDataImage = styled.img`
height: 2rem;
width: 2rem;
cursor: pointer;
transition-duration: 500ms;
@media only screen and (max-width: 900px) {
    height: 1.5rem;
    width: 1.5rem;
}
`
export const CountryNameImgContainer = styled.div`
align-items: center;
display: flex;
&:hover{
    .CountryDataImageClass{
        scale: 1.2;
    }
}
@media only screen and (max-width: 900px) {
    &:hover{
    .CountryDataImageClass{
        scale: 1;
    }
}
}
`
