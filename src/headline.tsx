import * as React from "react";
import styled from "@emotion/styled";
import { Color } from "./color";

export interface HeadlineProps {
	/** @name CSS class @ignore */ className?: string;
	/** @name Order @default H1 */ order: HeadlineLevel;
	/** @name Color */ color?: Color;
	children?: React.ReactNode;
}

export enum HeadlineLevel {
	Large,
	Medium,
	Small
}

const StyledHeadline = styled.div`
	margin: 0;
	color: ${(props: HeadlineProps) => props.color || "inherit"};
	line-height: 1.3;

	${(props: HeadlineProps) => {
		switch (props.order) {
			case HeadlineLevel.Small:
				return `
					font-size: 24px;

					@media screen and (min-width: 960px) {
						font-size: 32px;
					}
				`;
			case HeadlineLevel.Medium:
				return `
					font-size: 32px;

					@media screen and (min-width: 450px) {
						font-size: 48px;
					}
					@media screen and (min-width: 960px) {
						font-size: 54px;
					}
				`;
			case HeadlineLevel.Large:
			default:
				return `
					font-size: 48px;

					@media screen and (min-width: 450px) {
						font-size: 64px;
					}
					@media screen and (min-width: 960px) {
						font-size: 96px;
					}
				`;
		}
	}};
`;

/**
 * @icon Bold
 */
export const Headline: React.SFC<HeadlineProps> = props => {
    return (
        <StyledHeadline {...props}>
            {props.children}
        </StyledHeadline>
    )
};