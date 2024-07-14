const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3001;

// MongoDB connection URL
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const dbName = 'book_review_app';

app.use(cors());

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const booksCollection = db.collection('books');

    app.get('/books', async (req, res) => {
      const books = await booksCollection.find({}).toArray();
      res.json(books);
    });

    app.get('/books/:id', async (req, res) => {
      const bookId = parseInt(req.params.id);
      const book = await booksCollection.findOne({ id: bookId });
      if (!book) return res.status(404).send('Book not found');
      res.json(book);
    });

    app.listen(port, () => console.log(`Book service listening on port ${port}`));
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
  }
}

main();
