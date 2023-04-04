import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const resume = 'https://raw.githubusercontent.com/GabrielPelosi/GabrielPelosi/main/resume.pdf'

const Hero = (props) => (
  <Section row nopadding> 
    <LeftSection>
      <SectionTitle main center> 
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText> 
        Here you can find some of my personal and academic projects. <br/> Deployed or not you'll find the git
        repository for the source code and documentation. If its deployed i will be able to use the production version.
      </SectionText>
      <Button onClick={() => window.open(resume, '_blank').focus()}>Professional Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;