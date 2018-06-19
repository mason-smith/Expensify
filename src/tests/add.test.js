const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
 const result = add(3, 4);
 expect(result).toBe(7);
});

test('Should greet with a user generated name', () => {
 const result = generateGreeting('Mason');
 expect(result).toBe(`Hello Mason!`);
});

test('Should greet with No Name', () => {
 const result = generateGreeting();
 expect(result).toBe(`Hello Anonymous!`);
});
