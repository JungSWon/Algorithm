var createHelloWorld = function() {
    return function(...args) {
        const result = 'Hello World';
        return result;
    }
};