export const fetchOrders = async () => {
    const res = await fetch("/api/orders");
    const data = await res.json();
    return data;
}

export const fetchOrdersTotalMonth = async () => {
    const res = await fetch("/api/total-orders");
    const data = await res.json();
    return data;
}

export const fetchOrdersTotalWeek = async () => {
    const res = await fetch("/api/total-orders");
    const data = await res.json();
    return data;
}

export const fetchOrdersCustom = async (startDate: number, endDate: number) => {
    const url = `/api/orders?startDate=${startDate}&endDate=${endDate}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}