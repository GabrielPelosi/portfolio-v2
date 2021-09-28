import React, { useState } from 'react';

import {
    BlogCard, CardInfo, ExternalLinks, GridContainer,
    HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img,
    CheckBoxWrapper, CheckBox, CheckBoxLabel
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const GridProjects = ({projects}) => {

    return (
        <GridContainer>
            {projects.map((project) => (
                <BlogCard key={project.id}>
                    <Img src={project.image} />
                    <TitleContent>
                        <HeaderThree title> {project.title} </HeaderThree>
                        <Hr />
                    </TitleContent>
                    <CardInfo>{project.description}</CardInfo>
                    <div>
                        <TitleContent>Stack</TitleContent>
                        <TagList>
                            {
                                project.tags.map((tag, i) => (
                                    <Tag key={i}> {tag} </Tag>
                                ))
                            }
                        </TagList>
                    </div>
                    <UtilityList>
                        {project.visit ? <ExternalLinks target="_blank" href={project.visit}>Visit</ExternalLinks> : ""}
                        <ExternalLinks target="_blank" href={project.source}>Source</ExternalLinks>
                    </UtilityList>
                </BlogCard>
            ))}
        </GridContainer>
    );
}

export default GridProjects;