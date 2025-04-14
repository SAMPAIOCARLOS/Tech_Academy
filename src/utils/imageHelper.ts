export function getImageUrl_icon(path: string): string {
    return new URL(`../assets/images/icones/${path}`, import.meta.url).href
} 

export function getImageUrl_image(path: string): string {
    return new URL(`../assets/images/imagens/${path}`, import.meta.url).href
} 


