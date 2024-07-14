import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState({}); // Store reviews by bookId

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const fetchReviews = async (bookId) => {
    const res = await fetch(`http://localhost:3002/reviews/${bookId}`);
    const data = await res.json();
    setReviews(prevReviews => ({ ...prevReviews, [bookId]: data }));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Book Reviews</Typography>
      <BookList books={books} reviews={reviews} fetchReviews={fetchReviews} />
    </Container>
  );
}

export default App;
