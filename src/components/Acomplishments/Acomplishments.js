import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'FreeCodeCamp.orb courses for web development'},
  { number: 25, text: 'Repositories of college and personal projects in github', },
  { number: 5, text: 'Full-stack and fron-end projects in github and deployed', },
  { number: 'coming soon...', text:'Graduation and professional experience'}
];

const Acomplishments = () => (
  <Section>
  <SectionTitle>Personal Achievements</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{`${card.number}`}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
  <SectionDivider/>
</Section>
);

export default Acomplishments;
