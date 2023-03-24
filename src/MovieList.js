import React from 'react';
import { data } from './App';

//COMPONENT - MovieList
export default function MovieList({ selection, setSelection }) {
	return (
		<div id="container-list">
			{data.map(movie => (
				<button
					key={movie.id}
					className={movie.id == selection ? 'btn list-btn selected' : 'btn list-btn'}
					onClick={() => setSelection(movie.id)}
				>
					<h2>{movie.title}</h2>
				</button>
			))}
		</div>
	);
}

