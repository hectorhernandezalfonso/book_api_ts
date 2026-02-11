export interface SearchBookApi{
    available: number,
    number: number,
    offset: number,
    books: BookApi[]
}

export interface SimilarBooksApi{
    books: BookApi[]
}

export interface AuthorApi{
    authors: AuthorPreApi[]
}

export interface BookApi{
    id:number,
    title:string,
    subtitle?: string,
    image?: string,
    identifiers?:IdentifyApi,
    authors?:AuthorPreApi[],
    publishDate?: number,
    numberOfPages?: number
    description?: string,
    rating?:RatingApi
}

interface RatingApi{
    average:number
}

interface AuthorPreApi{
    id: number,
    name:string
}

interface IdentifyApi{
    openLibraryId: string,
    isbnten: string,
    isbnthirteen: string
}