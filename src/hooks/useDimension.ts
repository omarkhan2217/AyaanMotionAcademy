import { useEffect, useRef } from "react";

interface IUseDimensionProps {
    width: number;
    height: number;
}

export const useDimensions = (ref: React.RefObject<HTMLElement>): IUseDimensionProps => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        dimensions.current.width = ref.current?.offsetWidth || 0;
        dimensions.current.height = ref.current?.offsetHeight || 0;
    }, [ref]);

    return dimensions.current;
};
