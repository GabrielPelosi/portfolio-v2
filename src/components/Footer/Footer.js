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
        <LinkItem href="tel:+351 926 963 405">PT +351 926 963 405</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:gabriel.pelosi.2020@gmail.com">
          gabriel.pelosi.2020@gmail.com
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating one project at a time</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons target="_blank"   href="https://github.com/GabrielPelosi">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank"   href="https://www.linkedin.com/in/gabriel-pelosi-92a578177/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank"   href="https://www.instagram.com/gpelosi_/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
