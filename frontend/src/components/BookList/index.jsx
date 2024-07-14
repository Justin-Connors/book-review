import * as React from 'react';
import Grid from '@mui/material/Grid';
import BookItem from '../BookItem';

function BookList({ books, reviews, fetchReviews }) {
  return (
    <Grid container spacing={2}>
      {books.map(book => (
        <Grid item xs={12} sm={6} key={book.id}>
          <BookItem book={book} reviews={reviews[book.id]} fetchReviews={fetchReviews} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BookList;
