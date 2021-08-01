import AppImages from 'Images'
import React from 'react'
import { Card, CardContainer, CardHeading, CardImage, CardVirus, DataContainer, Heading, IllustrationContainer, LandingContainer, LandingContainerTwo, SubHeading, SubText } from './ContagionStyle'

export default function ContagionComp() {
    return (
        <>
            <LandingContainer id='contagion' >
                <DataContainer>
                    <SubHeading>COVID-19</SubHeading>
                    <Heading>
                        Contagion
                    </Heading>
                    <SubText>
                        Corona viruses are a type of virus.
                        There are many different kinds, <br />and some
                        cause disease. A newly identified type
                    </SubText>
                    <CardContainer>
                        <Card>
                            <CardImage className='CardImageClass' src={AppImages.Cough} />
                            <CardHeading>Air Transmission</CardHeading>
                            <SubText>
                                Objectively evolve tactical expertise
                                before extensible initiatives. Efficiently simplify
                            </SubText>
                        </Card>
                        <Card>
                            <CardImage className='CardImageClass' src={AppImages.HoldingHands} />
                            <CardHeading>Human Contacts</CardHeading>
                            <SubText>
                                Washing your hands is one of
                                thesimplest ways you can protect
                            </SubText>
                        </Card>
                        <Card>
                            <CardImage className='CardImageClass' src={AppImages.Cup} />
                            <CardHeading>Containted Objects</CardHeading>
                            <SubText>
                                Use the tissue while sneezing,In this way,
                                you can protect your droplets.
                            </SubText>
                        </Card>
                        <CardVirus src={AppImages.Virus} />
                    </CardContainer>
                </DataContainer>
            </LandingContainer>
            <LandingContainerTwo id='symptoms' >
                <DataContainer>
                    <SubHeading>COVID-19</SubHeading>
                    <Heading>
                    Symptomps
                    </Heading>
                    <SubText>
                        Corona viruses are a type of virus.
                        There are many different kinds, and some cause disease.<br />
                        A newly identified type has caused a recent outbreak of respiratory
                    </SubText>
                </DataContainer>
                <IllustrationContainer src={AppImages.LadyIllustration}>
                </IllustrationContainer>
            </LandingContainerTwo>
        </>
    )
}
