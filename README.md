# Book API CLI (TypeScript)

A simple TypeScript CLI that interacts with the BigBookAPI to search books, get book details, find similar books, and search authors.

## Features
- Search books by keyword
- Get book information by ID
- Find similar books by ID
- Search authors by name

## Tech Stack
- TypeScript
- Node.js
- ts-node
- BigBookAPI
- dotenv

## Setup

Install dependencies:
```bash
npm install

```

## ```.env``` File structure
```
API_KEY=your_api_key_here
BASE_URL=https://api.bigbookapi.com
```

## Run App
```
npx ts-node main.ts
```
## Project Structure
```
src/
├── api/        # API calls
├── model/      # Data models
├── parser/     # API to user model mapping
├── service/    # Business logic
└── main.ts     # CLI entry point
``