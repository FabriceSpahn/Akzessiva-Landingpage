import * as React from 'react';

export interface SpaceProps {
	/** @name Size @default M */ size?: SpaceSize;
}

export enum SpaceSize {
	XS = 5,
	S = 10,
	M = 20,
	L = 50,
    XL = 100,
    XXL = 150
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
