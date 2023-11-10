export function keep<T>(collection: T[], predicate: (item: T) => boolean): T[] {
    const kept: T[] = [];
    for (const item of collection) {
        if (predicate(item)) {
            kept.push(item);
        }
    }
    return kept;
}

export function discard<T>(collection: T[], predicate: (item: T) => boolean): T[] {
    const discarded: T[] = [];
    for (const item of collection) {
        if (!predicate(item)) {
            discarded.push(item);
        }
    }
    return discarded;
}