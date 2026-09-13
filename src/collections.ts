export const findById = <T extends { id: number }>(items: Array<T>, id: number): T | undefined =>
    items.find((item) => item.id === id);

export const replaceById = <T extends { id: number }>(items: Array<T>, remplacement: T): Array<T> => {
    return items.map(c => {
        if (c.id === remplacement.id) { 
            return remplacement 
        }
        return c;
    })
}

