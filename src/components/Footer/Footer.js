import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem herf="tel:+91 9027375224">+91 9027375224</LinkItem>
        </LinkColumn>


        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem herf="mailto:abhishekbhatt072003@gmail.com">abhishekbhatt072003@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>


      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time </Slogan>
        </CompanyContainer>
        <SocialContainer>

          <SocialIcons href="https://github.com/AbhishekBhatt072003">
            <AiFillGithub size='3rem' />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/abhishek-bhatt-739336215/">
            <AiFillLinkedin size='3rem' />
          </SocialIcons>

          <SocialIcons href="https://www.instagram.com/abhishekbhatt072003/">
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>



    </FooterWrapper>
  );
};

export default Footer;
