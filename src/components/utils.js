export const calcTotalPrice = (items) => items.reduce((acc, items) => acc += items.price, 0)
