/**
 * Book API - A simple REST API for managing books
 * Uses Express.js framework with in-memory storage
 */

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory storage for books (array)
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

// Variable to track the next available ID
let nextId = 4;

/**
 * Root route - Returns a welcome message
 * GET /
 */
app.get('/', (req, res) => {
  res.send('Book API Running');
});

/**
 * GET /books - Returns all books
 * Returns: Array of all books
 */
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

/**
 * GET /books/:id - Returns a single book by ID
 * Params: id (book ID)
 * Returns: Book object if found, 404 if not found
 */
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  // Find the book by ID
  const book = books.find(b => b.id === id);
  
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  res.status(200).json(book);
});

/**
 * POST /books - Add a new book
 * Body: { title: string, author: string }
 * Returns: The created book with ID, 201 status
 */
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  
  // Validate that title and author are provided
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required' });
  }
  
  // Create new book object
  const newBook = {
    id: nextId++,
    title: title,
    author: author
  };
  
  // Add to books array
  books.push(newBook);
  
  // Return the created book with 201 status
  res.status(201).json(newBook);
});

/**
 * PUT /books/:id - Update a book by ID
 * Params: id (book ID)
 * Body: { title?: string, author?: string }
 * Returns: Updated book if found, 404 if not found
 */
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  // Find the book index by ID
  const bookIndex = books.findIndex(b => b.id === id);
  
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  const { title, author } = req.body;
  
  // Update only provided fields
  if (title) books[bookIndex].title = title;
  if (author) books[bookIndex].author = author;
  
  res.status(200).json(books[bookIndex]);
});

/**
 * DELETE /books/:id - Delete a book by ID
 * Params: id (book ID)
 * Returns: Success message if deleted, 404 if not found
 */
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  // Find the book index by ID
  const bookIndex = books.findIndex(b => b.id === id);
  
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  // Remove the book from the array
  books.splice(bookIndex, 1);
  
  res.status(200).json({ message: 'Book deleted successfully' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
