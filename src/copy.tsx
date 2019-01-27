import * as React from 'react';
import styled from '@emotion/styled';
import { Color } from './color';

export interface CopyProps {
	/** @ignore */ className?: string;
	/** @name Copy Size @default Medium */ size?: CopySize;
    /** @name Color */ color?: Color;
	children?: React.ReactNode;
}

export enum CopySize {
	Small,
	Medium,
	Large
}

const StyledCopy = styled.p`
    margin: 0;
    color: ${(props: CopyProps) => props.color};
    line-height: 1.4;

    ${props => {
        switch (props.size) {
            case CopySize.Small:
                return 'font-size: 12px;'
            case CopySize.Medium:
            default:
                return 'font-size: 16px';
            case CopySize.Large:
                return `
                    font-size: 18px;

                    @media screen and (min-width: 960px) {
                        font-size: 24px;
                    }
                `;
        }
    }};
`;

/**
 * @icon Type
 */
export const Copy: React.SFC<CopyProps> = props => {
    return (
        <StyledCopy {...props}>
            {props.children}
        </StyledCopy>
    )
};