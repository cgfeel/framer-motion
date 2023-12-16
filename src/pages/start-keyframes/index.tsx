import { motion } from 'framer-motion';
import "./styles.css";

export default function Page() {
    return (
        <motion.div 
            className="box"
            animate={{
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],  // 边框半径
                rotate: [0, 0, 180, 180, 0],                     // 旋转
                scale: [1, 2, 2, 1, 1],                          // 大小比例
            }}
            transition={{
                duration: 2,                     // 持续时间
                ease: "easeInOut",               // 运动方式
                times: [0, 0.2, 0.5, 0.8, 1],    // 关键帧时间
                repeat: Infinity,                // 重复次数
                repeatDelay: 1                   // 每次延迟时间
            }}
        />
    );
}