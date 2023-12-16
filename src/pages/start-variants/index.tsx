import { AnimationProps, motion, useCycle } from "framer-motion";
import { useRef } from "react";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import "./styles.css";
import { useDimensions } from "./use-dimensions";

const sidebar: AnimationProps['variants'] = {
    closed: {
        clipPath: 'circle(30px at 40px 40px)',
        transition: {
            delay: .5,
            damping: 40,
            stiffness: 400,
            type: 'spring'
        }
    },
    // Variants can also be dynamic functions that return different props based on data passed to each component's custom prop.
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            restDelta: 2,
            stiffness: 20,
            type: 'spring'
        }
    }),
};

export default function Page() {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const containerRef = useRef<HTMLElement>(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            animate={isOpen ? 'open' : 'closed'}  // 更改这个props将更改整个react tree
            custom={height}
            initial={false}
            ref={containerRef}
        >
            <motion.div 
                className="background" 
                variants={sidebar} 
            />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
}