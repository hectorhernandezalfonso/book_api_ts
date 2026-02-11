import { searchAuthors, searchBookInformation, searchBooks, searchSimilarBooks } from '../api/user.api'
import { BookApi } from '../model/book.api'
import { Author, Book, SearchBook, SimilarBooks } from '../model/book.user'
import { parseSearchBook, parseBook, parseSimilarBooks, parseAuthor } from '../parser/book.parser'


export async function parsedSearchBooks(query: string) : Promise<SearchBook>{
    let data = await searchBooks(query);
    return parseSearchBook(data);
}

export async function parsedSearchBookInformation(query:number) : Promise<Book>{
    let data = await searchBookInformation(query);
    return parseBook(data);
}


export async function parsedSearchSimilarBooks(query:number) : Promise<SimilarBooks>{
    let data = await searchSimilarBooks(query);
    return parseSimilarBooks(data);
}


export async function parsedSearchAuthors(query:string) : Promise<Author>{
    let data = await searchAuthors(query);
    return parseAuthor(data);
}
