import { motion } from "framer-motion";
import "./styles.css";

export default function Page() {
    return (
        <div className="start-page">
            <motion.div
                className="box"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
            />
        </div>
    );
}