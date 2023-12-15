import { useState } from "react";
import "./styles.css";

export default function Page() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    return (
        <div>
            test page
        </div>
    );
}