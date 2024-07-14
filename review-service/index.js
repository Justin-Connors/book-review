const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3002;

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
    const reviewsCollection = db.collection('reviews');

    app.get('/reviews/:bookId', async (req, res) => {
      const bookId = parseInt(req.params.bookId);
      const bookReviews = await reviewsCollection.find({ bookId }).toArray();
      res.json(bookReviews);
    });

    app.listen(port, () => console.log(`Review service listening on port ${port}`));
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
  }
}

main();
