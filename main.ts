import { parsedSearchAuthors, parsedSearchBookInformation, parsedSearchBooks, parsedSearchSimilarBooks } from './service/book.service'


async function main() {

  



  let result = await parsedSearchBooks("romance");
  console.log(result);

  let result_2 = await parsedSearchBookInformation(16384516);
  console.log(result_2);
  let result_3 = await parsedSearchSimilarBooks(16384516);
  console.log(result_3);

  let result_4 = await parsedSearchAuthors("Garcia");
  console.log(result_4);
}


main();
