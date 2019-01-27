import * as React from 'react';

export interface SpaceProps {
	/** @name Size @default M */ size?: SpaceSize;
}

export enum SpaceSize {
    XXS = 3,
	XS = 6,
	S = 15,
	M = 30,
	L = 60,
    XL = 120,
    XXL = 240
}

/**
 * @icon Maximize
 */
export const Space: React.SFC<SpaceProps> = props => {
    return (
        <div style={{
            display: 'block',
            width: `${props.size}px`,
            height: `${props.size}px`,
        }}>
            {props.children}
        </div>
    )
};
