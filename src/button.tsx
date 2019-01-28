import * as React from 'react';
import styled from '@emotion/styled';
import { Color } from './color';
import { SpaceSize } from './space';

export interface ButtonProps {
    children?: React.ReactNode;
}

const StyledButton = styled.div`
    display: inline-block;
    background: ${Color.Black};
    padding: ${SpaceSize.S}px ${SpaceSize.M}px;
    color: ${Color.White};

    &:hover {
        background: ${Color.Grey20};
    }
`;

/**
 * @icon MinusSquare
 */
export const Button: React.SFC<ButtonProps> = props => {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    )
};
