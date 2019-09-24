import { useState } from 'react'

export function useOrderDialog() {
    const [openOrderDialog, setOpenOrderDialog] = useState();
    return {
        openOrderDialog,
        setOpenOrderDialog
    };
}
