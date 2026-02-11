import { searchBooks } from '../api/user.api'
import { BookApi } from '../model/book.api'
import { SearchBook } from '../model/book.user'
import { parseSearchBook } from '../parser/book.parser'


export async function parsedSearchBooks(query: string) : Promise<SearchBook>{
    let data = await searchBooks(query);
    let apiBook = {
        available : data.available,
        number : data.numer,
        offset : data.offset,
        books : data.books
    }

    return parseSearchBook(apiBook);
}