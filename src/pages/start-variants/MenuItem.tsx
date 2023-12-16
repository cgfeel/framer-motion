import { AnimationProps, motion } from "framer-motion";
import { FC } from "react";

const colors = [
    "#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"
];

const variants: AnimationProps['variants'] = {
    closed: {
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        },
        y: 50
    },
    open: {
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        },
        y: 0
    }
};

const MenuItem: FC<MenuItemProps> = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: .95 }}
        >
            <div className="icon-placeholder" style={style} />
            <div className="text-placeholder" style={style} />
        </motion.li>
    );
};

export interface MenuItemProps {
    i: number;
}

export default MenuItem;