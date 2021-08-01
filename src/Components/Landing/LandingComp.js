import React from 'react'
import {
    DataContainer, DataContainerTwo, Heading,
    IllustrationContainer, LandingContainer,
    LandingContainerTwo, LightButton, SolidButton,
    SolidButtonContainer, SubHeading, SubText,
    VirusHalfImage, VirusImage
} from './LandingStyle'
import AppImages from 'Images'

export default function LandingComp() {
    return (
        <>
            <LandingContainer>
                <DataContainer>
                    <SubHeading>COVID-19 Alert</SubHeading>
                    <Heading>
                        Stay at Home quarantine<br />To stop Corona virus
                    </Heading>
                    <SubText>
                        There is no specific medicine to prevent or treat
                        coronavirus disease (COVID-19). People may need supportive care to .
                    </SubText>
                    <SolidButtonContainer>
                        <SolidButton>
                            Let Us Help
                        </SolidButton>
                    </SolidButtonContainer>
                </DataContainer>

                <IllustrationContainer
                    src={AppImages.LandingIllustration}
                >

                </IllustrationContainer>
            </LandingContainer>

            {/* What is Covid */}

            <LandingContainerTwo>
                <VirusImage src={AppImages.Virus} ></VirusImage>
                <VirusHalfImage src={AppImages.VirusHalf} ></VirusHalfImage>
                <IllustrationContainer
                    src={AppImages.CoronaIllustration}
                />
                <DataContainerTwo>
                    <SubHeading>What Is Covid-19</SubHeading>
                    <Heading>

                        Coronavirus
                    </Heading>
                    <SubText>
                        Corona viruses are a type of virus. There are many different kinds,
                        and some cause disease. A newly identified type has caused a recent
                        outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S.,
                        the director of operations with the Johns Hopkins Office of Critical
                        Event Preparedness and Response
                    </SubText>
                    <SolidButtonContainer>
                        <LightButton>
                            Learn More
                        </LightButton>
                    </SolidButtonContainer>
                </DataContainerTwo>

            </LandingContainerTwo>
        </>
    )
}
