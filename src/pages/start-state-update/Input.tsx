import { FC, PropsWithChildren } from "react";

const Input: FC<PropsWithChildren<InputProps>> = ({
    children, value, set, min = -200, max = 200
}) => (
    <label>
        <code>{children}</code>
        <input
            type="range"
            max={max}
            min={min}
            value={value}
            onChange={e => set(parseFloat(e.target.value))}
        />
        <input
            type="number"
            max={max}
            min={min}
            value={value}
            onChange={e => set(parseFloat(e.target.value)||0)}
        />
    </label>
);

export interface InputProps {
    value: number;
    set: (val: number) => void;
    min?: number;
    max?: number;
}

export default Input;