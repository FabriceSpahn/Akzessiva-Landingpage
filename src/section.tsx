import * as React from 'react';
import styled from "@emotion/styled";
import { SpaceSize } from './space';
import { Color } from './color';

export interface SectionProps {
  backgroundColor: Color;
  children?: React.ReactNode;
}

const StyledSection = styled.div`
  background: ${(props: SectionProps) => props.backgroundColor};
  padding: ${SpaceSize.XL}px 0;
  ${(props: SectionProps) => props.backgroundColor === Color.Black && `color: ${Color.White};`}
`;

const StyledWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Section: React.SFC<SectionProps> = props => {
	return (
    <StyledSection {...props}>
      <StyledWrapper>
        {props.children}
      </StyledWrapper>
    </StyledSection>
	);
};
