import { FC, useState } from 'react';
import '../styles.css';
import { randomId } from '../utilities';

type InputComponentProps = { value: string; label: string; type: string };

export const InputComponent: FC<InputComponentProps> = ({
    value,
    label,
    type,
}: InputComponentProps) => {
    const [val, setVal] = useState(value);
    const rdId = randomId();
    console.log(`Input component - ${label} rendering`, Date.now());
    return (
        <>
            <div className="input-container-formup">
                <label htmlFor={rdId}>{label}</label>
                <input
                    className="formup-1234"
                    type={type}
                    id={rdId}
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
            </div>
        </>
    );
};
