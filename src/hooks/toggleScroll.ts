import { useEffect } from 'react';

export const useToggleScroll = (active: boolean) => {
    useEffect(() => {
        if (active) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [active]);
};

