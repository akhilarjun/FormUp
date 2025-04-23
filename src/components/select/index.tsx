import { useState } from "react";

import "../styles.css";
import { randomId } from "../utilities";

type SelectProps = {
    options:{
        value: string,
        label: string
    }[],
    value: string,
    label: string
}

export const SelectComponent = ({ options, value, label }: SelectProps) => {
	const [val, setSelectedValue] = useState(value);
	const handleChange = (val:string) => {
		setSelectedValue(val);
	};
	const rdId = randomId();
    console.log('Select component rendering', Date.now())
	return (
		<div className="input-container-formup">
			<label htmlFor={rdId}>{label}</label>
			<select
				id={rdId}
				value={val}
				onChange={(e) => handleChange(e.target.value)}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};