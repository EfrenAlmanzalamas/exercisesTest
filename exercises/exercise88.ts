export function isPaired(input: string): boolean {
    const stack: string[] = [];
    const mapping: { [key: string]: string } = { ')': '(', '}': '{', ']': '[' };

    for (const char of input) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack[stack.length - 1] !== mapping[char]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}