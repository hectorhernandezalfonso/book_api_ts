import { AuthorApi, BookApi, SearchBookApi, SimilarBooksApi } from '../model/book.api'
import { SearchBook } from '../model/book.user';

import 'dotenv/config'


const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

if (!API_KEY) {
  throw new Error('Missing API_KEY in environment variables');
}


export async function searchBooks(query: string){
    const url = `${BASE_URL}/search-books?api-key=${API_KEY}&query=${query}`;


    const response = await fetch(url);
    
    if (!response.ok)
    {
        throw Error(`HTTP ERROR STATUS ${response.status}`);
    }

    const data: SearchBookApi = await response.json();
    return data;
}


export async function searchBookInformation(query: number){
    const url = `${BASE_URL}/api-key=${API_KEY}&${query}`;

    const response = await fetch(url);

    if(!response.ok)
    {
        throw Error(`HTTP ERROR STATUS ${response.status}`);
    }

    const data: BookApi = await response.json();
    return data;
}



export async function searchSimilarBooks(query: number)
{
    const url = `${BASE_URL}/api-key=${API_KEY}&${query}/similar`;

    const response = await fetch(url);

    if(!response.ok)
    {
        throw Error(`HTTP ERROR STATUS ${response.status}`);
    }

    const data: SimilarBooksApi = await response.json();
    return data;
}


export async function searchAuthors(query: string)
{
    const url = `${BASE_URL}/api-key=${API_KEY}&search-authors?name=${query}`;

    const response = await fetch(url);

    if(!response.ok)
    {
        throw Error(`HTTP ERROR STATUS ${response.status}`);
    }

    const data: AuthorApi = await response.json();
    return data;
}