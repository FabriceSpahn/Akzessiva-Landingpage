import * as React from 'react';
import styled from '@emotion/styled';
import { Color } from "./color";

export interface alphabetProps {
    backgroundColor: Color;
    children?: React.ReactNode;
  }

  const StyledAlphabet = styled.div`
    box-shadow: 1px 0 0 0 ${Color.Black}, 0 1px 0 0 ${Color.Black}, 1px 1px 0 0 ${Color.Black}, 1px 0 0 0 ${Color.Black} inset, 0 1px 0 0 ${Color.Black} inset;
    height:calc(84vw/16);
    width:calc(84vw/16);
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    display:inline-block;
    flex: 0 1 auto;
    text-align: center;
`;

/**
 * @icon MinusSquare
 */
export const Alphabet: React.SFC<alphabetProps> = props => {
  return (
      <StyledAlphabet>
          {props.children}
      </StyledAlphabet>
  )
};
