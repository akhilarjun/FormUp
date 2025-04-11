import { parse } from "../@parser";
import { ComponentMapType, FormConfigType } from "../@typedefs";

type params = {
	componentMap: ComponentMapType;
	formConfig: FormConfigType;
};

export const FormUp = ({ componentMap, formConfig }: params) => {
	const op = parse(formConfig, componentMap);
	return (
		<>
			<div>
				{op.map((el) => (
					<div key={el.id}>{el.comp}</div>
				))}
			</div>
		</>
	);
};
