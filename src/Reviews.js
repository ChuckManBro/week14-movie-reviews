import React from 'react';
import starSolid from './images/stars/solid.svg';

//COMPONENT - Reviews
export default function Reviews({ selection, postedReviews }) {
	function printStar(rating, number) {
		if (rating >= number) return <img className="star" src={starSolid} />;
	}

	return (
		<div id="container-reviews">
			{postedReviews.map(review => (
				<div key={review.id} className="container-saved-review">
					{/* <img className="star" src={starSolid} /> */}
					{printStar(review.starRating, 1)}
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
