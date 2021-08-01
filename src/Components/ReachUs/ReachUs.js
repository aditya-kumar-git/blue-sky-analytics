
import AppImages from 'Images'
import React from 'react'
import { SubText, FooterBlocks, FooterContainer, FooterText, HAQContainer, Heading, InputBox, InputContainer, InputSubmitButton, ReachUsContainer, VirusHalfImage, VirusImage, FooterLogos, FooterBlocksTwo, FooterTextHeading, FooterLogosHead } from './ReachUsStyle'

export default function ReachUs() {
    return (
        <ReachUsContainer>
            <HAQContainer>
                <VirusHalfImage src={AppImages.VirusHalf} ></VirusHalfImage>
                <VirusImage src={AppImages.Virus} ></VirusImage>
                <Heading>
                    Have Question in mind?
                    <br />Let us help you
                </Heading>
                <InputContainer>
                    <InputBox placeholder='snmonydemo@gmail.com' />
                    <InputSubmitButton>
                        Send
                    </InputSubmitButton>
                </InputContainer>
            </HAQContainer>
            <FooterContainer>
                <FooterBlocksTwo>

                    <FooterLogosHead src={AppImages.FooterVirus} />
                    <FooterTextHeading>Covid - 19</FooterTextHeading>

                </FooterBlocksTwo>
                <FooterBlocks>
                    <FooterText>Overview</FooterText>
                    <FooterText>Symptoms</FooterText>
                    <FooterText>Prevention</FooterText>
                    <FooterText>Treatment</FooterText>
                </FooterBlocks>
                <FooterBlocks>
                    <FooterLogos src={AppImages.FaceBook} />
                    <FooterLogos src={AppImages.Youtube} />
                    <FooterLogos src={AppImages.Vimeo} />
                    <FooterLogos src={AppImages.Twitter} />
                </FooterBlocks>

            </FooterContainer>
            <SubText>2020 @ All rights reserved by Aditya Kumar</SubText>
        </ReachUsContainer>
    )
}
