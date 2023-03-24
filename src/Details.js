import React from 'react';
import starSolid from './images/stars/solid.svg';
import starHalf from './images/stars/half.svg';
import starEmpty from './images/stars/empty.svg';

//COMPONENT - Details
export default function Details({ details }) {
	return (
		<div id="container-details">
			<div id="container-details-info">
				<h1>{details.title}</h1>
				<StarAverage reviews={details.reviews} />
				<h3>{details.year}</h3>
				<h3>{details.genre}</h3>
				<h3>{details.mpaRating}</h3>
				<h3>{details.duration}</h3>
				<p>{details.synopsis}</p>
			</div>
			<img id="cover-img" src={require(`./images/covers/${details.coverImg}`)}></img>
		</div>
	);
}

//COMPONENT - StarAverage
function StarAverage({ reviews }) {
	// Calculate the star rating average, rounded to nearest half-star
	let sum = 0;
	for (let review of reviews) {
		sum += review.starRating * 2;
	}
	let average = Math.round(sum / reviews.length) / 2;

	// Set the array of star icons
	let starIconArr = [];
	for (let i = 5; i > 0; i--) {
		average > 0.5
			? starIconArr.push(starSolid)
			: average > 0
			? starIconArr.push(starHalf)
			: starIconArr.push(starEmpty);
		average--;
	}

	// Return five stars, determined by the starIconArr
	return (
		<div>
			<img className="star" src={starIconArr[0]} />
			<img className="star" src={starIconArr[1]} />
			<img className="star" src={starIconArr[2]} />
			<img className="star" src={starIconArr[3]} />
			<img className="star" src={starIconArr[4]} />
		</div>
	);
}
