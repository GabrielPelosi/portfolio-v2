import React , {useState} from 'react';

import {
  BlogCard, CardInfo, ExternalLinks, GridContainer,
  HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img,
  CheckBoxWrapper, CheckBox, CheckBoxLabel
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { PersonalProjects, academicProjects } from '../../constants/constants';
import GridProjects from './GridProject';

const Projects = () => {


  const [projectToggleState, setProjectToggleState] = useState(true)

  return (

    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main> Projects</SectionTitle>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel onClick={() => setProjectToggleState(!projectToggleState)} htmlFor="checkbox" />
      </CheckBoxWrapper>
      {
        projectToggleState ? <GridProjects projects={PersonalProjects}/> : <GridProjects projects={academicProjects}/>
      }

    </Section>);
}

export default Projects;