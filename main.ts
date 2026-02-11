import readline from "readline"
import { parsedSearchAuthors, parsedSearchBookInformation, parsedSearchBooks, parsedSearchSimilarBooks } from './service/book.service'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function ask(question: string): Promise<string>{
  return new Promise(resolve => rl.question(question, resolve));
}

function showMenu(): void {
  console.log(`
===== BOOK SEARCHER!! =====
1. General book search
2. Search book information by ID
3. Search similar book by ID
4. Search author
0. Exit
`);
}


async function main() :Promise<void>{
  showMenu();
  while(true){
    const option = await ask("Choose an option: ");
    switch (option) {

      case "1":
        let query = await ask("Search by: ")
        let result = await parsedSearchBooks(query);
        console.log(result);
        break;

      case "2":
        let query_2 = await ask("Search by: ")
        let result_2 = await parsedSearchBookInformation(Number(query_2));
        console.log(result_2);
        break;

      case "3":
        let query_3 = await ask("Search by: ")
        let result_3 = await parsedSearchSimilarBooks(Number(query_3));
        console.log(result_3);
        break;

      case "4":
        let query_4 = await ask("Search by: ")
        let result_4 = await parsedSearchAuthors(query_4);
        console.log(result_4);
        break;


      case "0":
        console.log("good bye!");
        rl.close();
        return;
      
      default:
        console.log("Invalid option");
    }
      showMenu();
  }
}


main();
