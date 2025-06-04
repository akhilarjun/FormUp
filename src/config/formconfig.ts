import { FormConfigType } from '../../lib/@typedefs';

export const pagesOfForm: FormConfigType[] = [
    [
        {
            formElementType: 'INPUT',
            elementProps: {
                value: 'John',
                label: 'First Name',
                type: 'text',
            },
            elementId: 'jd01',
        },
        {
            formElementType: 'INPUT',
            elementProps: {
                value: 'Doe',
                label: 'Last Name',
                type: 'text',
            },
            elementId: 'jd02',
        },
    ],
    [
        {
            formElementType: 'INPUT',
            elementProps: {
                value: 'johndoe@test.com',
                label: 'Personal Email',
                type: 'email',
            },
            elementId: 'jd03',
        },
        {
            formElementType: 'INPUT',
            elementProps: {
                value: '+1 (234) 9745',
                label: 'PhoneNumber',
                type: 'text',
            },
            elementId: 'jd04',
        },
        {
            formElementType: 'SELECT',
            elementProps: {
                value: 'VP',
                label: 'Role',
                options: [
                    {
                        value: 'AT',
                        label: 'Analyst',
                    },
                    {
                        value: 'AS',
                        label: 'Associate',
                    },
                    {
                        value: 'VP',
                        label: 'Vice President',
                    },
                    {
                        value: 'MD',
                        label: 'Managing Director',
                    },
                ],
            },
            elementId: 'apoer408',
        },
    ],
];
