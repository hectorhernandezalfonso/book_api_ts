import { BookApi, SearchBookApi, SimilarBooksApi, AuthorApi } from '../model/book.api'
import { Book, SearchBook, SimilarBooks, Author } from '../model/book.user'

export function parseBook(api: BookApi) : Book {
    return {
    id: api.id,
    title:api.title,
    image: api.image ?? null,
    authors: api.authors ? 
             api.authors.map(author => author.name) 
             : null ,
    rating: Number(api.rating?.average) ?? null,
    description: api.description ?? null,
    publishDate: api.publishDate ?? null,
    numberOfPages: api.numberOfPages ?? null,
    openLibraryId: api.identifiers?.openLibraryId ?? null,
    isbnten: api.identifiers?.isbnten ?? null,
    isbnthirteen: api.identifiers?.isbnthirteen ?? null,
    }
}


export function parseSearchBook(api:SearchBookApi): SearchBook{
    return{
        available: api.available,
        number: api.number,
        offset: api.offset,
        books: api.books.map(inner => parseBook(inner[0]))
    }
}

export function parseSimilarBooks(api: SimilarBooksApi): SimilarBooks {
  return {
    books: api.similar_books
      ? api.similar_books.map(parseBook)
      : []
  };
}


export function parseAuthor(api: AuthorApi): Author {
    return {
        authors: api.authors ? api.authors.map(author => author.name) : []
    };
}
