export interface Hotel {
    id: number,
    title: string,
    desc: string,
    price: number,
    bedrooms: number,
    bathroom: number,
    image?: string,
    date: string,
    soldOut: boolean
}
