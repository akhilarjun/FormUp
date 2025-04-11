import { createElement } from "react";

import { ComponentMapType, FormConfigType } from "../@typedefs";

export const parse = (
	formConfig: FormConfigType,
	componentMap: ComponentMapType
) => {
	return formConfig.map((config) => {
		if (componentMap[config.formElementType]) {
			return {
				comp: createElement(
					componentMap[config.formElementType],
					config.elementProps
				),
				id: config.elementId,
			};
		} else {
			console.error(`Improper Element Type for ${config.elementId}`);
			return {
				comp: <></>,
				id: config.elementId,
			};
		}
	});
};
