import * as React from 'react';
import styled from '@emotion/styled';
import { Color } from './color';
import { SpaceSize } from './space';

export interface FooterProps {
	children?: React.ReactNode;
}

const StyledFooter = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: ${SpaceSize.M}px 0;
    border-top: 1px solid ${Color.Grey80};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLogo = styled.div`
    height: 25px;
    width: 25px;
`;

const StyledContent = styled.div`
    display: flex;
`;

export const Footer: React.SFC<FooterProps> = props => {
    return (
        <StyledFooter {...props}>
            <StyledLogo>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 85.04 113.39">
                    <polygon points="85.04,28.35 85.04,0 28.35,0 0,28.35 0,113.39 28.35,113.39 28.35,85.04 56.69,85.04 85.04,56.69 28.35,56.69 28.35,28.35 "/>
                </svg>
            </StyledLogo>
            <StyledContent>
                {props.children}
            </StyledContent>
        </StyledFooter>
    )
};
