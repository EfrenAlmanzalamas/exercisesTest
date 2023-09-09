export function decodedValue(data: string[]) {
    const str = `${COLORS.indexOf(data[0])}${COLORS.indexOf(data[1])}`
    return Number(str)
}


export const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
]