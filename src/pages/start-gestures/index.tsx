import { motion } from "framer-motion";
import "./styles.css";

export default function Page() {
    return (
        <div className="start-page">
            <motion.div
                className="box"
                drag="x"
                animate={{ opacity: 1 }}
                dragConstraints={{ left: -100, right: -100 }}
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
            />
        </div>
    );
}