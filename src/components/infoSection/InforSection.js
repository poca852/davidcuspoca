import React from 'react';
import { Container, Button } from '../../GlobalStyle'
import { Link } from 'react-router-dom';
import { Heading, Img, ImgWrapper, InfoColumn, InfoRow, InfoSec, Subtitle, TextWrapper, TopLine } from './InforSection.elements';
import pdf from '../../assets/david-portfolio.pdf';


const InforSection = ({
  lightBg, imgStart, lightTopLine, lightText, lightTextDesc, primary, buttonLabel, description, headLine, topLine, alt, img, start
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{ headLine }</Heading>
                <Subtitle lightTextDesc={lightTextDesc} >{description}</Subtitle>
                <Link onClick={() => window.open(pdf)}>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InforSection