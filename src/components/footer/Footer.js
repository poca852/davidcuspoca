import React from 'react';
import { Link } from 'react-router-dom';
import { CopyFooter, FooterContainer, GitHubIcon, LinkedinIcon, SocialFooter } from './Footer.elements';


const Footer = () => {
  return (
    <>
      <FooterContainer>
        <CopyFooter>
          &#169; David Cuspoca
        </CopyFooter>
        <SocialFooter>
          <Link to='/git' target='_blank'>
            <GitHubIcon />
          </Link>
          <Link to='https://www.linkedin.com/in/davidcuspoca/' target='_blank'>
            <LinkedinIcon />
          </Link>
        </SocialFooter>
      </FooterContainer>
    </>
  )
}

export default Footer