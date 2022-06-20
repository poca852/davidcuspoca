import styled from 'styled-components';
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export const FooterContainer = styled.footer`
  background: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CopyFooter = styled.p`
  color: white;
  text-align: center;
  font-size: 1.4rem;
`

export const SocialFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 10px;
`
export const GitHubIcon = styled(FaGithub)`
  color: #fff;
  font-size: 2rem;
  `

export const LinkedinIcon = styled(FaLinkedin)`
  color: #fff;
  font-size: 2rem;
`