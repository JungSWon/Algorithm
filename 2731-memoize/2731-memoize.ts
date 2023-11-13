type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let memo = {};
    return function(...args) {
        const stringifiedArgs = JSON.stringify(args);
        if(memo[stringifiedArgs] === undefined){
            const res = fn(...args);
            memo[stringifiedArgs] = res;
            return res;
        } else return memo[stringifiedArgs];
    }
}