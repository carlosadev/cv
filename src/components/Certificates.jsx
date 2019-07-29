import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/Pstyled';

const Certificates = props => (
    <div className="certificate">
        <H2Styled name="Certificates" />
        <div className="certificate-container">
            {props.data.map((cert, index)=>(
                <div className="certificate-item" key={`Certificate-${index}`}>
                    <H3Styled>{cert.name} {cert.institution} <span> {cert.date} </span> </H3Styled>
                    <PStyled name={cert.description} />
                </div>
            ))}

        </div>
    </div>
);

export default Certificates;