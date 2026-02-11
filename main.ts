import { parsedSearchBooks } from './service/book.service'


async function main() {
  let result = await parsedSearchBooks("romance");
  console.log(result);
}

main();
