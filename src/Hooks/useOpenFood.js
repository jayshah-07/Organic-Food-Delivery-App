import { useState } from 'react';

export function useOpenFood() {
    const [openFood, setOpenFood] = useState();
    return {
        openFood,
        setOpenFood
    }
}