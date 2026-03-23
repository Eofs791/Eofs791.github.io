export function shuffleArray<T>(array : T[]): T[] {
    const copy = [...array];

    for (let i = 0; i < copy.length; i++) {
        const j = Math.floor(Math.random() * copy.length);
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}