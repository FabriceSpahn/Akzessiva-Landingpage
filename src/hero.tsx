import * as React from 'react';
import styled from "@emotion/styled";
import { Color } from './color';

export interface HeroProps {
    backgroundColor: Color;
    children?: React.ReactNode;
  }


const StyledHero = styled.div`
    background: ${(props: HeroProps) => props.backgroundColor};
    height: 100vh;
    width: 100%;
     ${(props: HeroProps) => props.backgroundColor === Color.Black && `color: ${Color.White};`}
`;

const StyledHeroContainer = styled.div`
border: 1px solid ${Color.Grey80};
position: absolute;
left:50%;
top: 50%;
transform: translate(-50%,-50%);
height: 90%;
width: 90%;
`;


const Vertical = styled.div`
color:green;
width: 1px;
height:100%;
position: absolute;
left: 50%;
transform: translateX(-50%);
`;

const Horizontal = styled.div`
color:red;
height: 1px;
width:100%;
position: absolute;
top: 50%;
transform: translateY(-50%);
`;


export const Hero: React.SFC<HeroProps> = props => {
	return (
    <StyledHero {...props}>
      <StyledHeroContainer>
          <Vertical></Vertical>
          <Horizontal></Horizontal>
        {props.children}
      </StyledHeroContainer>
    </StyledHero>
	);
};