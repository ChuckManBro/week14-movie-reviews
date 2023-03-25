import React from 'react';
import { useState } from 'react';
import starSolid from './images/stars/solid.svg';
import starEmpty from './images/stars/empty.svg';

//COMPONENT - FormReview
export default function FormReview({ appendReview }) {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(0);
	const textLength = text.length;
	const textMax = 400;

	function handleSubmit() {
		//Run the appendReview function in App.js with the new values
		appendReview(rating, text);

		//Clear the form upon submit
		setRating(0);
		setText('');
	}

	return (
		<div id="form-review">
			<div id="form-header">
				<h2>Write a Reel Review</h2>
				<span id="word-count">({textMax - textLength})</span>
			</div>
			<textarea
				maxLength={textMax}
				// placeholder="Write your own Reel Review..."
				value={text}
				onChange={event => setText(event.target.value)}
			></textarea>
			<div id="form-buttons">
				<StarRate rating={rating} setRating={setRating} />
				<button className="btn" onClick={() => handleSubmit()}>
					Submit
				</button>
			</div>
		</div>
	);
}

//COMPONENT - StarRate
function StarRate({ rating, setRating }) {
	function handleStar1Click() {
		rating === 1 ? setRating(0) : setRating(1);
	}

	return (
		<div id="container-star-rate">
			<img
				className="star"
				onClick={() => handleStar1Click()}
				src={rating >= 1 ? starSolid : starEmpty}
			/>
			<img
				className="star"
				onClick={() => setRating(2)}
				src={rating >= 2 ? starSolid : starEmpty}
			/>
			<img
				className="star"
				onClick={() => setRating(3)}
				src={rating >= 3 ? starSolid : starEmpty}
			/>
			<img
				className="star"
				onClick={() => setRating(4)}
				src={rating >= 4 ? starSolid : starEmpty}
			/>
			<img
				className="star"
				onClick={() => setRating(5)}
				src={rating >= 5 ? starSolid : starEmpty}
			/>
		</div>
	);
}
