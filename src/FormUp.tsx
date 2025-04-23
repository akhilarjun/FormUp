import  { useEffect, useState } from "react";

import { FormUp as FormUpComponent } from "../lib";
import "./FormUpStyles.css";
import {InputComponent, SelectComponent} from './components';
import { ComponentMapType, FormConfigType } from "../lib/@typedefs";

const pagesOfForm: FormConfigType[] = [
	[
		{
			formElementType: "INPUT",
			elementProps: {
				value: "John",
				label: "First Name",
				type: "text",
			},
			elementId: "jd01",
		},
		{
			formElementType: "INPUT",
			elementProps: {
				value: "Doe",
				label: "Last Name",
				type: "text",
			},
			elementId: "jd02",
		},
	],
	[
		{
			formElementType: "INPUT",
			elementProps: {
				value: "johndoe@test.com",
				label: "Personal Email",
				type: "email",
			},
			elementId: "jd03",
		},
		{
			formElementType: "INPUT",
			elementProps: {
				value: "+1 (234) 9745",
				label: "PhoneNumber",
				type: "text",
			},
			elementId: "jd04",
		},
		{
            formElementType: "SELECT",
            elementProps: {
                value: "VP",
                label: "Role",
                options: [
                    {
                        value: "AT",
                        label: "Analyst",
                    },
                    {
                        value: "AS",
                        label: "Associate",
                    },
                    {
                        value: "VP",
                        label: "Vice President",
                    },
                    {
                        value: "MD",
                        label: "Managing Director",
                    },
                ],
            },
            elementId: "apoer408",
        },
	],
];
const componentMap: ComponentMapType = {
    "INPUT": InputComponent,
    "SELECT": SelectComponent,
}

export const FormUp = () => {
    console.log('FormUp container Rendering', Date.now())
	const [config, setFormConfig] = useState(pagesOfForm[0]);
	const [currPage, setCurrPage] = useState(0);
	const [disableNext, setDisableNext] = useState(false);
	const [disablePrev, setDisablePrev] = useState(false);
	useEffect(() => {
		if (currPage || currPage === 0) {
			setFormConfig(pagesOfForm[currPage]);
		}
		if (currPage + 1 >= pagesOfForm.length) {
			setDisableNext(true);
		} else {
			setDisableNext(false);
		}
		if (currPage - 1 < 0) {
			setDisablePrev(true);
		} else {
			setDisablePrev(false);
		}
	}, [currPage]);
	const pageShift = (dir: string) => {
		switch (dir) {
			case "next":
				if (currPage + 1 < pagesOfForm.length) {
					setCurrPage(currPage + 1);
				}
				break;
			case "previous":
				if (currPage - 1 > -1) {
					setCurrPage(currPage - 1);
				}
				break;
		}
	};
	const addRandomValues = () => {
		const activeData = JSON.parse(JSON.stringify(config));
		activeData.push({
			formElementType: "INPUT",
			elementProps: {
				value: (Math.random() + 1).toString(36).substring(5),
				label: "Random",
				type: "text",
			},
			elementId: "jd0" + (Math.random() + 1).toString(36).substring(8),
		});
		setFormConfig(activeData);
	};
	return (
		<>
			<FormUpComponent formConfig={config} componentMap={componentMap} />
			<div className="buttonbar">
				<button
					onClick={() => pageShift("previous")}
					disabled={disablePrev}
				>
					Previous
				</button>
				<button
					onClick={() => pageShift("next")}
					disabled={disableNext}
				>
					Next
				</button>
			</div>
			{/* <div className="divider"></div>
			<div className="actionBar">
				<button onClick={() => addRandomValues()}>
					⚙️ Add Random Values
				</button>
			</div> */}
		</>
	);
};