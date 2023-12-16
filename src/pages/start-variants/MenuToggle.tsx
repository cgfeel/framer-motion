import { AnimationProps, Cycle, motion } from "framer-motion";
import { FC } from "react";

const Path: FC<PathProps> = props => (
    <motion.path
        fill="transparent"
        stroke="hsl(0, 0%, 18%)"
        strokeWidth="3"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle: FC<MenuToggleProps> = ({ toggle }) => (
    <button 
        onClick={() => toggle()}
    >
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                transition={{ duration: 0.1 }}
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);

interface PathProps extends Pick<AnimationProps, 'transition'|'variants'> {
    d?: string;
}

export interface MenuToggleProps {
    toggle: Cycle;
}

export default MenuToggle;