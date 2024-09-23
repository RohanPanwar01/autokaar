import React from 'react';
import "./GuestReview.css";

function GuestReview() {
  // Assuming you have an array of reviews with ratings
  const reviews = [
    // { name: 'Your Name 1', rating: 5, feedback: 'Good experience' },
    // { name: 'Your Name 2', rating: 5, feedback: 'Bad service' },
    // { name: 'Your Name 1', rating: 5, feedback: 'Good experience' },
    // { name: 'Your Name 2', rating: 5, feedback: 'Bad service' },
    // { name: 'Your Name 1', rating: 5, feedback: 'Good experience' },
    // { name: 'Your Name 2', rating: 5, feedback: 'Bad service' },
    // { name: 'Your Name 1', rating: 5, feedback: 'Good experience' },
    // { name: 'Your Name 2', rating: 5, feedback: 'Bad service' },
    // { name: 'Your Name 1', rating: 5, feedback: 'Good experience' },
    // { name: 'Your Name 2', rating: 5, feedback: 'Bad service' },
    // { name: 'Your Name 1', rating: 5, feedback: 'Good experience' },
    // { name: 'Your Name 2', rating: 5, feedback: 'Bad service' },
    // { name: 'Your Name 1', rating: 5, feedback: 'Good experience' },
    // { name: 'Your Name 2', rating: 5, feedback: 'Bad service' },
    // { name: 'Your Name 1', rating: 5, feedback: 'Good experience' },
    // { name: 'Your Name 2', rating: 5, feedback: 'Bad service' },
    // Add more reviews as needed
  ];

  // Function to generate stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
      );
    }
    return stars;
  };

  return (

    <div className='GuestReview'>
        <div className='GuestReviewp'>
        <p >Guest Reviews</p>
        </div>
      

      {reviews.map((review, index) => (
        <div key={index} className={`profile-container ${index !== reviews.length - 1 ? 'border-bottom' : ''}`}>
          <img src="assets/img/user2.jpg" alt="Profile Image" className="profile-image" />

          <div className="profile-name">
            {review.name}
            <div className='GuestReviewreport'>
              <span>{review.feedback}</span>
            </div>
          </div>

          <div className='star-rating'>
            {renderStars(review.rating)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GuestReview;
