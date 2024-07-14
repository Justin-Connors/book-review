import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

function BookItem({ book, reviews, fetchReviews }) {
  const [showReviews, setShowReviews] = React.useState(false);


  // If `showReviews` is false, it fetches the reviews for the book.
  const handleClick = () => {
    if (!showReviews) {
      fetchReviews(book.id);
    }
    setShowReviews(!showReviews);
  }

  return (
    <div>
      {/* Display the book title */}
      <Typography variant="h6">{book.title}</Typography>
      {/* Display the book author */}
      <Typography variant="body1">By: {book.author}</Typography>
      {/* Button to toggle showing/hiding reviews */}
      <Button onClick={handleClick}>
        {showReviews ? 'Hide Reviews' : 'Show Reviews'}
      </Button>
      {/* Display the reviews if showReviews is true */}
      {showReviews && (
        <List>
          {/* Check if reviews exist */}
          {reviews ? (
            // If reviews exist, map through them and display each review
            reviews.map(review => (
              <ListItem key={review._id}>
                <ListItemText primary={review.review} />
              </ListItem>
            ))
          ) : (
            // If reviews don't exist, display a loading message
            <ListItem>
              <ListItemText primary="Loading reviews...." />
            </ListItem>
          )}
        </List>
      )}
    </div>
  );
}

export default BookItem;
