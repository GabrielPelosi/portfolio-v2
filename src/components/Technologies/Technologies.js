import React from 'react';
import {DiJava, DiReact, DiDocker,DiGitBranch, DiScrum } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've workend and developed with many technologies in web development world.
      From Back-end to Front-end applications.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Already developed <br/>
            React apps with JavaScript and TypeScript, 
            Html5, css3, Sass, Taiwind and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="5rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Already developed <br/>
            Apis with Java, Maven, Gradle, Spring boot and its dependencies
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="5rem"/>
        <ListContainer>
          <ListTitle>Docker</ListTitle>
          <ListParagraph>
            Docker for developer and test <br/> databases containers
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGitBranch size="5rem"/>
        <ListContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph>
            Worked with github and bitbucket <br/> 
            for personal and academic projects
          </ListParagraph>
          <ListParagraph>
            Also used gitflow in one project
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiScrum size="5rem"/>
        <ListContainer>
          <ListTitle>Methodologies</ListTitle>
          <ListParagraph>
            In all my academic projects, i have used Scrum <br/> 
            as Methodology
          </ListParagraph>
        </ListContainer>
      </ListItem>
      </List>
  </Section>
);

export default Technologies;
