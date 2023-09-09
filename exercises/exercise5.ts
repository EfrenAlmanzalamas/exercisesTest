export function decodedResistorValue(data: string[]) {

    const prex = COLORS.indexOf(data[2])
    const str = `${COLORS.indexOf(data[0])}${COLORS.indexOf(data[1])}`
    let count = 0;
    let cant = Number(str) * Math.pow(10, Number(prex));
    while (cant >= 1000) {
        cant /= 1000;
        count++;
    }
    if (count in Prefixes) {
        // @ts-ignore
        const preFix = Prefixes[count];
        return `${Number(cant)} ${preFix}ohms`;
    } else {
        return str.toString() + " ohms";
    }
}

export const Prefixes = {
    0:  "",
    1:  "kilo",
    2:  "mega",
    3:  "giga",
    4: "tera",
    5: "peta"
}


export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
]