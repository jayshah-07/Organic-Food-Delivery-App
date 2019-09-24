import { useState } from 'react';

export function useOrders() {
    const [orders, setOrders] = useState([]);
    return {
        orders,
        setOrders
    }
}