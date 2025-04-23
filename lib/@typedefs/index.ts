import { Attributes, FC } from "react";

export type ComponentMapType = {
	[key: string]: FC<any>;
};

export type FormConfigType = {
	formElementType: string;
	elementProps: Attributes & {
		value: string | number;
		label?: string;
		type?: string;
		options?: {
			value: string | number;
			label: string;
		}[];
	};
	elementId: string;
}[];
