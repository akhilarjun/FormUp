import { useEffect, useState } from 'react';

import { FormUp as FormUpComponent } from '../lib';
import './FormUpStyles.css';
import { pagesOfForm, componentMap } from './config';

export const FormUp = () => {
    console.log('FormUp container Rendering', Date.now());
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
            case 'next':
                if (currPage + 1 < pagesOfForm.length) {
                    setCurrPage(currPage + 1);
                }
                break;
            case 'previous':
                if (currPage - 1 > -1) {
                    setCurrPage(currPage - 1);
                }
                break;
        }
    };
    return (
        <>
            <FormUpComponent formConfig={config} componentMap={componentMap} />
            <div className="buttonbar">
                <button
                    onClick={() => pageShift('previous')}
                    disabled={disablePrev}
                >
                    Previous
                </button>
                <button
                    onClick={() => pageShift('next')}
                    disabled={disableNext}
                >
                    Next
                </button>
            </div>
        </>
    );
};
