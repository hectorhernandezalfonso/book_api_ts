export interface Book{
    id : number,
    title:string,
    image: string | null,
    authors:string[] | null,
    rating:number | null,
    description: string | null,
    publishDate: number | null,
    numberOfPages: number | null,
    openLibraryId: string | null,
    isbnten: string | null,
    isbnthirteen: string | null,
}

export interface SearchBook{
    available: number,
    number: number,
    offset: number,
    books: Book[]
}

export interface SimilarBooks{
    books: Book[]
}

export interface Author{
    authors: string[]
}

