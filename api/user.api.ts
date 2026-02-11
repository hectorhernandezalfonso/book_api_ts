import { SearchBookApi } from '../model/book.api'
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

    const data = await response.json();
    return data;
}


