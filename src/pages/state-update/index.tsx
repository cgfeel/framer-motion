import { motion } from "framer-motion";
import { useState } from "react";
import Input from "./Input";
import "./styles.css";

export default function Page() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    return (
        <div
            className="example"
        >
            <motion.div
                className="box"
                animate={{ x, y, rotate }}
                transition={{ type: 'spring' }}
            />
            <div className="inputs">
                <Input 
                    value={x}
                    set={setX}
                >
                    x
                </Input>
                <Input 
                    value={y}
                    set={setY}
                >
                    y
                </Input>
                <Input 
                    max={180}
                    min={-180}
                    value={rotate}
                    set={setRotate}
                >
                    rotate
                </Input>
            </div>
        </div>
    );
}