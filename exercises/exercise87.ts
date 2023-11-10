export function flatten(input: any[]): any[] {
    const result: any[] = [];

    function recursiveFlatten(arr: any[]) {
        for (const item of arr) {
            if (item !== null && item !== undefined) {
                if (Array.isArray(item)) {
                    recursiveFlatten(item);
                } else {
                    result.push(item);
                }
            }
        }
    }

    recursiveFlatten(input);
    return result;
}
