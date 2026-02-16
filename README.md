# Book API - Node.js REST API

A simple REST API for managing books using Node.js and Express framework.

## Features

- **GET /books** - Retrieve all books
- **GET /books/:id** - Retrieve a specific book by ID
- **POST /books** - Create a **PUT /books new book
-/:id** - Update an existing book
- **DELETE /books/:id** - Delete a book
- **GET /** - Root endpoint returning "Book API Running"

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone or download this project
2. Open terminal in the project directory
3. Install dependencies:

```
bash
npm install
```

## Running the Server

Start the server:

```
bash
npm start
```

The server will start on **http://localhost:3000**

## Book Data Structure

Each book has the following structure:

```
json
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}
```

## API Endpoints

### 1. Get Root Message
**Endpoint:** `GET /`

Returns a welcome message to confirm the API is running.

**Response:**
```
Book API Running
```

---

### 2. Get All Books
**Endpoint:** `GET /books`

Returns an array of all books.

**Response (200 OK):**
```
json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell"
  }
]
```

---

### 3. Get Book by ID
**Endpoint:** `GET /books/:id`

Returns a specific book by ID.

**Parameters:**
- `id` - Book ID (number)

**Response (200 OK):**
```
json
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}
```

**Response (404 Not Found):**
```
json
{
  "message": "Book not found"
}
```

---

### 4. Create New Book
**Endpoint:** `POST /books`

Creates a new book.

**Headers:**
- Content-Type: application/json

**Request Body:**
```
json
{
  "title": "Book Title",
  "author": "Author Name"
}
```

**Response (201 Created):**
```
json
{
  "id": 4,
  "title": "Book Title",
  "author": "Author Name"
}
```

**Response (400 Bad Request):**
```
json
{
  "message": "Title and author are required"
}
```

---

### 5. Update Book
**Endpoint:** `PUT /books/:id`

Updates an existing book.

**Parameters:**
- `id` - Book ID (number)

**Headers:**
- Content-Type: application/json

**Request Body:**
```
json
{
  "title": "Updated Title",
  "author": "Updated Author"
}
```

**Response (200 OK):**
```
json
{
  "id": 1,
  "title": "Updated Title",
  "author": "Updated Author"
}
```

**Response (404 Not Found):**
```
json
{
  "message": "Book not found"
}
```

---

### 6. Delete Book
**Endpoint:** `DELETE /books/:id`

Deletes a book by ID.

**Parameters:**
- `id` - Book ID (number)

**Response (200 OK):**
```json
{
  "message": "Book deleted successfully"
}
```

**Response (404 Not Found):**
```
json
{
  "message": "Book not found"
}
```

## HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created successfully |
| 400 | Bad Request (missing fields) |
| 404 | Not Found |
| 500 | Internal Server Error |

## Testing with Postman

See [POSTMAN.md](POSTMAN.md) for detailed Postman request examples.

## Project Structure

```
book-api/
├── package.json       # Project configuration
├── server.js          # Main server file
├── README.md         # This file
└── POSTMAN.md        # Postman examples
```

## License

ISC
