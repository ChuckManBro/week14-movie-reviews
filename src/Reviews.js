import React from 'react';
import starSolid from './images/stars/solid.svg';

//COMPONENT - Reviews
export default function Reviews({ selectedReviews }) {
	function printStar(rating, number) {
		if (rating >= number) return <img className="star" src={starSolid} />;
	}

	return (
		<div id="container-reviews">
			{selectedReviews.map(review => (
				<div key={review.id} className="container-saved-review">
					{review.starRating > 0 ? printStar(review.starRating, 1) :
          <p>( zero stars )</p>}
					{printStar(review.starRating, 2)}
					{printStar(review.starRating, 3)}
					{printStar(review.starRating, 4)}
					{printStar(review.starRating, 5)}
					<p>{review.text}</p>
				</div>
			))}
		</div>
	);
}
