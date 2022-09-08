export interface Link {
    name: string,
    url?: string,
    revealed: boolean,
    children?: [Link]
}