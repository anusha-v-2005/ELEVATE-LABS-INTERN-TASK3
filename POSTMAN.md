# Book API - Postman Request Examples

This document provides sample Postman request examples for testing the Book API.

## Base URL
```
http://localhost:3000
```

---

## 1. Get Root Message
**Description:** Test if the API is running

- **Method:** GET
- **URL:** `http://localhost:3000/`
- **Response:** `Book API Running`

---

## 2. Get All Books
**Description:** Retrieve all books from the API

- **Method:** GET
- **URL:** `http://localhost:3000/books`

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
  },
  {
    "id": 3,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee"
  }
]
```

---

## 3. Get Book by ID
**Description:** Retrieve a specific book by its ID

- **Method:** GET
- **URL:** `http://localhost:3000/books/1`

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

## 4. Create New Book
**Description:** Add a new book to the collection

- **Method:** POST
- **URL:** `http://localhost:3000/books`
- **Headers:** 
  - Content-Type: application/json
- **Body (JSON):**
```
json
{
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger"
}
```

**Response (201 Created):**
```
json
{
  "id": 4,
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger"
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

## 5. Update Book by ID
**Description:** Update an existing book's details

- **Method:** PUT
- **URL:** `http://localhost:3000/books/1`
- **Headers:** 
  - Content-Type: application/json
- **Body (JSON):**
```
json
{
  "title": "The Great Gatsby (Updated)",
  "author": "F. Scott Fitzgerald (Updated)"
}
```

**Response (200 OK):**
```
json
{
  "id": 1,
  "title": "The Great Gatsby (Updated)",
  "author": "F. Scott Fitzgerald (Updated)"
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

## 6. Delete Book by ID
**Description:** Remove a book from the collection

- **Method:** DELETE
- **URL:** `http://localhost:3000/books/1`

**Response (200 OK):**
```
json
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

---

## How to Run the API

1. Make sure Node.js is installed
2. Open terminal in the project folder
3. Install dependencies:
   
```
bash
   npm install
   
```
4. Start the server:
   
```
bash
   npm start
   
```
5. The API will be available at `http://localhost:3000`

---

## Summary of HTTP Status Codes Used

| Status Code | Description |
|-------------|-------------|
| 200 | Success (GET, PUT, DELETE) |
| 201 | Created successfully (POST) |
| 400 | Bad Request (missing fields) |
| 404 | Not Found (book doesn't exist) |
| 500 | Internal Server Error |
