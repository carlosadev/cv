import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/Pstyled';

const Edutacion = props => (
    <div className="education">
        <H2Styled name="Education" />
        <div className="educaction-container">
            {props.data.map((edu, index) => (
                <div className="education-item" key={`Edu-${index}`}>
                    <H3Styled>{edu.degree} {edu.institution} <span>{edu.starDate} - {edu.endDate} </span> </H3Styled>
                     <PStyled name={edu.description} />
                </div>
            ))}

        </div>
    </div>
);

export default Edutacion;