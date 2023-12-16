import { RefObject, useEffect, useRef } from "react";

export const useDimensions = (ref: RefObject<HTMLElement>) => {
    const dismensions = useRef({ height: 0, width: 0 });

    useEffect(() => {
        dismensions.current.height = ref.current?.offsetHeight||0;
        dismensions.current.width = ref.current?.offsetWidth||0;
    }, [dismensions, ref]);

    return dismensions.current;
};