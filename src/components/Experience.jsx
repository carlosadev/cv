import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/Pstyled';

const Experience = props => (
    <div className="experience">
        <H2Styled name="Experiences" />
        <div className="experience-container">
            {props.data.map((exp, index) => (
                <div className="experience-item" key={`Exp-${index}`}>
                    <H3Styled>{exp.jobTitle} {exp.company}  <span> {exp.startDate} - {exp.endDate} </span> </H3Styled>
                    <PStyled name={exp.jobDescription} />
                </div>
            ))}
        </div>
    </div>
);

export default Experience;