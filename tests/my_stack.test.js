const stack = require('../src/stack');

test('pushing 3 items and popping once leaves first item', () => {
    stack.push('första');
    stack.push('andra');
    stack.push('tredje'); 
    stack.pop();
    stack.pop();
    expect(stack.peek()).toBe('första');
});