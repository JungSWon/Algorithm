type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let cur = init;
    const increment = () => ++cur;
    const decrement = () => --cur;
    const reset = () => {
        cur = init;
        return cur;
        };

    return { increment, decrement, reset };
};