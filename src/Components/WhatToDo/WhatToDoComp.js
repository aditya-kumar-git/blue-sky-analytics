import AppImages from 'Images'
import React from 'react'
import { Container, DataContainer, DataContainerThree, DataContainerTwo, Heading, HeadingContainer, IllustrationContainer, LandingContainer, LandingContainerTwo, NumberContainer, SubHeading, SubText, TextContainer, VirusImageLeft, VirusImageRight, VirusImageRightSmall } from './WhatToDoStyle'

export default function WhatToDoComp() {
    return (
        <>
            <Container id='prevention' >
                <DataContainer>
                    <SubHeading>COVID-19</SubHeading>
                    <Heading>
                        What should we do
                    </Heading>
                    <SubText>
                        Corona viruses are a type of virus. There are many different kinds,
                        and some cause<br /> disease. A newly identified type has caused
                    </SubText>
                </DataContainer>
            </Container>
            <LandingContainer>
                <DataContainerTwo>
                    <HeadingContainer>
                        <VirusImageLeft src={AppImages.GreenVirusLeft} />
                        <NumberContainer>01</NumberContainer>
                        <TextContainer>
                            <Heading>
                                wear masks
                            </Heading>
                            <SubText>
                                Continually seize impactful vortals rather than future-proof supply chains.
                                Uniquely exploit emerging niches via fully tested meta-services. Competently
                                pursue standards compliant leadership skills vis-a-vis pandemic "outside the box"
                                thinking. Objectively
                            </SubText>
                        </TextContainer>
                    </HeadingContainer>
                </DataContainerTwo>
                <IllustrationContainer src={AppImages.MaskGirl} >

                </IllustrationContainer>
            </LandingContainer>
            <LandingContainerTwo>
                <IllustrationContainer src={AppImages.WashHands} >

                </IllustrationContainer>
                <DataContainerThree>
                    <HeadingContainer>

                        <NumberContainer>02</NumberContainer>
                        <TextContainer>

                            <Heading>
                                Wash Your Hands
                            </Heading>
                            <SubText>
                                Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals
                            </SubText>
                        </TextContainer>
                    </HeadingContainer>
                </DataContainerThree>

            </LandingContainerTwo>
            <LandingContainer>
                <DataContainerTwo>
                    <HeadingContainer>

                        <NumberContainer>03</NumberContainer>
                        <TextContainer>

                            <Heading>
                                Use nose -  rag
                            </Heading>
                            <SubText>
                                Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively
                            </SubText>
                        </TextContainer>

                    </HeadingContainer>
                </DataContainerTwo>
                <IllustrationContainer src={AppImages.NoseRag} >

                </IllustrationContainer>
            </LandingContainer>
            <LandingContainerTwo>
                <IllustrationContainer src={AppImages.AvoidContact} >

                </IllustrationContainer>
                <DataContainerThree>
                    <HeadingContainer>
                    <VirusImageRight src={AppImages.RedVirusRight} />
                    <VirusImageRightSmall src={AppImages.GreenVirusRight} />
                        <NumberContainer>04</NumberContainer>
                        <TextContainer>
                            <Heading>
                                Avoid contacts
                            </Heading>
                            <SubText>
                                Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic
                            </SubText>
                        </TextContainer>
                    </HeadingContainer>
                </DataContainerThree>
            </LandingContainerTwo>
        </>
    )
}
