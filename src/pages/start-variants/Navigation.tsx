import { AnimationProps, motion } from "framer-motion";
import { FC } from "react";
import MenuItem from "./MenuItem";

const itemId = [0, 1, 2, 3, 4];

const variants: AnimationProps['variants'] = {
    close: {
        transition: {
            staggerChildren: .05,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            delayChildren: .2,
            staggerChildren: .07,
        }
    }
};

const Navigation: FC = () => (
    <motion.ul
        variants={variants}
    >
        {itemId.map(i => (
            <MenuItem
                i={i}
                key={i}
            />
        ))}
    </motion.ul>
);

export default Navigation;