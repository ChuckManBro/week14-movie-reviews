import React from 'react';
import { data } from './App';

//COMPONENT - MovieList
export default function MovieList({ selectedMovie, updateSelection }) {
	return (
		<div id="container-list">
			{data.map(movie => (
				<button
					key={movie.id}
					className={movie.id == selectedMovie.id ? 'btn list-btn selected' : 'btn list-btn'}
					onClick={() => updateSelection(movie.id)}
				>
					<h2>{movie.title}</h2>
				</button>
			))}
		</div>
	);
}
