import { useState } from 'react';
import Details from './Details';
import FormReview from './FormReview';
import MovieList from './MovieList';
import Reviews from './Reviews';

let data = [
	{
		id: '0',
		title: 'Casino Royale',
		coverImg: 'casino-royale.jpg',
		genre: 'Action/Thriller',
		year: '2006',
		mpaRating: 'PG-13',
		duration: '2h 24m',
		synopsis:
			'After earning 00 status and a license to kill, secret agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.',
		reviews: [
			{
				id: '1',
				starRating: 0,
				text: "Casino Royale's convoluted plot and overlong runtime drag down what could have been a solid addition to the James Bond franchise.",
			},
			{
				id: '2',
				starRating: 1,
				text: "Despite Daniel Craig's strong performance, Casino Royale's excessive violence and gratuitous sex scenes feel more like shock value than a natural part of the story.",
			},
			{
				id: '3',
				starRating: 5,
				text: 'This film breathes new life into the James Bond franchise with its gritty realism, heart-pounding action sequences, and a compelling performance by Daniel Craig as the iconic spy.',
			},
		],
	},
	{
		id: '1',
		title: 'What About Bob?',
		coverImg: 'what-about-bob.jpg',
		genre: 'Comedy',
		year: '1991',
		mpaRating: 'PG',
		duration: '1h 39m',
		synopsis:
			'A successful psychotherapist loses his mind after one of his most dependent patients, an obsessive-compulsive neurotic, tracks him down during his family vacation.',
		reviews: [
			{
				id: '1',
				starRating: 1,
				text: 'A cringe-worthy comedy that relies too heavily on cheap laughs and lacks any real substance.',
			},
			{
				id: '2',
				starRating: 3,
				text: 'What About Bob is a light-hearted comedy that offers a few laughs, but ultimately fails to leave a lasting impression.',
			},
			{
				id: '3',
				starRating: 4,
				text: "This is a charming and hilarious film that showcases Bill Murray's comedic genius and offers a heartwarming story about overcoming personal struggles.",
			},
		],
	},
	{
		id: '2',
		title: 'O Brother, Where Art Thou?',
		coverImg: 'brother-where-art-thou.jpg',
		genre: 'Comedy',
		year: '2000',
		mpaRating: 'PG-13',
		duration: '1h 47m',
		synopsis:
			'In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them.',
		reviews: [
			{
				id: '1',
				starRating: 4,
				text: 'This is an offbeat and quirky film that may not appeal to everyone, but has a certain charm and wit to it.',
			},
			{
				id: '2',
				starRating: 2,
				text: "Disjointed and meandering film that fails to live up to the Coen Brothers' usual standards of storytelling.",
			},
			{
				id: '3',
				starRating: 5,
				text: "This movie is hilarious and inventive! It combines the Coen Brothers' signature style with an unforgettable soundtrack and memorable performances from its cast.",
			},
			{
				id: '4',
				starRating: 5,
				text: "O Brother, Where Art Thou? is a masterpiece of modern cinema that showcases the Coen brothers' unique brand of humor, storytelling, and filmmaking genius. With its quirky characters, timeless soundtrack, and stunning visuals, it's a true classic that deserves to be seen by every film lover.",
			},
			{
				id: '5',
				starRating: 1,
				text: 'Overrated.',
			},
		],
	},
	{
		id: '3',
		title: 'Napoleon Dynamite',
		coverImg: 'napoleon-dynamite.jpg',
		genre: 'Comedy',
		year: '2004',
		mpaRating: 'PG',
		duration: '1h 36m',
		synopsis:
			'A listless and alienated teenager decides to help his new friend win the class presidency in their small western high school, while he must deal with his bizarre family life back home.',
		reviews: [
			{
				id: '1',
				starRating: 4,
				text: 'Napoleon Dynamite is a hilarious and endearing film that captures the awkwardness of high school in a unique and unforgettable way.',
			},
			{
				id: '2',
				starRating: 5,
				text: "This movie's offbeat humor and lovable characters make it a cult classic that continues to charm audiences to this day.",
			},
			{
				id: '3',
				starRating: 2,
				text: "Napoleon Dynamite's deadpan humor and quirky characters may appeal to some, but others may find the film's slow pace and lack of a clear plot unsatisfying.",
			},
		],
	},
	{
		id: '4',
		title: 'Braveheart',
		coverImg: 'braveheart.jpg',
		genre: 'Drama/History',
		year: '1995',
		mpaRating: 'R',
		duration: '2h 58m',
		synopsis:
			'Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.',
		reviews: [
			{
				id: '1',
				starRating: 5,
				text: "This is a cinematic masterpiece that combines breathtaking action sequences with a heartfelt and emotional story of love, loss, and the fight for freedom, all anchored by Mel Gibson's powerful performance as William Wallace.",
			},
			{
				id: '2',
				starRating: 3,
				text: 'A sweeping and ambitious film that suffers from some uneven pacing and storytelling, but is still a decent historical epic.',
			},
			{
				id: '3',
				starRating: 0,
				text: "This film's historical inaccuracies and gratuitous violence overshadow what could have been an epic and inspiring tale of freedom and rebellion.",
			},
			{
				id: '4',
				starRating: 4,
				text: "A visually stunning epic that captures the breathtaking beauty of Scotland's rugged landscapes as it tells the story of William Wallace's fight for independence. The sweeping vistas and stunning cinematography make it a must-see for anyone who appreciates the natural beauty of Scotland.",
			},
		],
	},
	{
		id: '5',
		title: 'Jurassic Park',
		coverImg: 'jurassic-park.jpg',
		genre: 'Action/Adventure',
		year: '1993',
		mpaRating: 'PG-13',
		duration: '2h 7m',
		synopsis:
			"A wealthy entrepreneur invites a group of scientists to his dinosaur theme park, but the park's security systems fail, allowing the genetically-engineered dinosaurs to run amok and threaten the lives of everyone on the island.",
		reviews: [
			{
				id: '1',
				starRating: 4,
				text: 'Jurassic Park is a thrilling adventure that captures the imagination with its stunning visual effects and intense storyline, creating a world where dinosaurs once again roam the Earth.',
			},
			{
				id: '2',
				starRating: 5,
				text: "The film's expertly crafted mix of action, suspense, and heart make it a timeless classic that continues to captivate audiences to this day.",
			},
			{
				id: '3',
				starRating: 2,
				text: "Despite its groundbreaking visual effects, Jurassic Park's plot can feel contrived and lacks the depth of the novel it is based on.",
			},
			{
				id: '4',
				starRating: 5,
				text: "Jurassic Park is a groundbreaking film that revolutionized the use of visual effects in cinema, bringing the dinosaurs to life with unprecedented realism and detail. Even today, more than two decades after its release, the film's visual effects hold up remarkably well, making it a timeless classic that still captivates audiences of all ages.",
			},
			{
				id: '5',
				starRating: 4,
				text: 'The plot and pacing are excellent, but the fake-looking dinosaurs can be distracting and take away from the immersion in the story, making it hard to fully engage with the movie.',
			},
		],
	},
	{
		id: '6',
		title: 'About Time',
		coverImg: 'about-time.jpg',
		genre: 'Comedy/Drama',
		year: '2013',
		mpaRating: 'R',
		duration: '2h 3m',
		synopsis:
			'At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.',
		reviews: [
			{
				id: '1',
				starRating: 5,
				text: 'A heartwarming and charming film that explores the complexities of family, love, and the beauty of everyday moments.',
			},
			{
				id: '2',
				starRating: 5,
				text: 'This  is a refreshing and delightful romantic comedy that strikes the perfect balance between humor and emotion, leaving a lasting impression on its viewers.',
			},
			{
				id: '3',
				starRating: 4,
				text: 'About Time is a poignant and thought-provoking film that celebrates the power of living in the present and cherishing the people we love, with an exceptional cast that brings the story to life.',
			},
		],
	},
	{
		id: '7',
		title: 'Apollo 11',
		coverImg: 'apollo-11.jpg',
		genre: 'Documentary/History',
		year: '2013',
		mpaRating: 'G',
		duration: '1h 33m',
		synopsis:
			'A look at the Apollo 11 mission to land on the moon led by commander Neil Armstrong and pilots Buzz Aldrin and Mike Collins.',
		reviews: [
			{
				id: '1',
				starRating: 4,
				text: 'A stunning and immersive documentary that brings the historic moon landing to life through breathtaking archival footage and expertly crafted sound design.',
			},
			{
				id: '2',
				starRating: 5,
				text: 'This is a gripping and emotional retelling of one of the greatest achievements in human history, capturing the spirit of the era and the monumental accomplishment of the space program.',
			},
			{
				id: '3',
				starRating: 5,
				text: 'Apollo 11 is a must-see documentary that provides an unprecedented look at the remarkable journey of the Apollo 11 mission, with a sense of awe-inspiring wonder that will leave audiences speechless.',
			},
		],
	},
	{
		id: '8',
		title: 'Silverado',
		coverImg: 'silverado.jpg',
		genre: 'Western',
		year: '1985',
		mpaRating: 'PG-13',
		duration: '2h 13m',
		synopsis:
			'A misfit bunch of friends comes together to right the injustices which exist in a small town.',
		reviews: [
			{
				id: '1',
				starRating: 0,
				text: 'A generic and forgettable Western that fails to stand out from the countless others in the genre.',
			},
			{
				id: '2',
				starRating: 5,
				text: 'This is a classic Western that pays homage to the genre while injecting it with humor, heart, and thrilling action, making it a standout film with memorable characters and iconic moments.',
			},
			{
				id: '3',
				starRating: 2,
				text: 'Silverado is a well-crafted Western that features some impressive action sequences and a solid cast, but ultimately feels formulaic and predictable.',
			},
		],
	},
	{
		id: '9',
		title: 'Indiana Jones and the Last Crusade',
		coverImg: 'last-crusade.jpg',
		genre: 'Action/Adventure',
		year: '1989',
		mpaRating: 'PG-13',
		duration: '2h 7m',
		synopsis:
			'In 1938, after his father goes missing while pursuing the Holy Grail, Indiana Jones finds himself up against the Nazis again to stop them from obtaining its powers.',
		reviews: [
			{
				id: '1',
				starRating: 5,
				text: "Last Crusade is a triumphant return to form for the franchise, with a thrilling storyline, memorable characters, and an incredible performance from Sean Connery as Indy's father.",
			},
			{
				id: '2',
				starRating: 2,
				text: 'This movie relies too heavily on recycled plot points and lacks the excitement and creativity of the previous films in the series.',
			},
			{
				id: '3',
				starRating: 4,
				text: "Offers more of the same thrilling action and humor that made the series a hit, but doesn't quite reach the heights of its predecessors.",
			},
			{
				id: '4',
				starRating: 5,
				text: "Indiana Jones and the Last Crusade is a thrilling adventure movie that showcases Steven Spielberg's masterful storytelling and direction, delivering an action-packed ride that's full of heart and humor. With a standout performance by Harrison Ford and an excellent supporting cast, it's a classic that stands the test of time.",
			},
		],
	},
];

//COMPONENT - App
function App() {
	const [selection, setSelection] = useState(0);
	const [postedReviews, setPostedReviews] = useState(data[selection].reviews);

	function appendReview(rating, text) {
		console.log(`The rating is ${rating}, with a text of: ${text}`); //TEST
		const newReview = [
			{
				id: 100,
				starRating: rating,
				text: text,
			},
			...data[selection].reviews,
		];
		data[selection].reviews = newReview;
		setPostedReviews(newReview);

		console.log(data[selection].reviews);//TEST
	}

	return (
		<div id="bkg">
			<div id="title-gap"></div>

			<div id="container-main">
				<MovieList selection={selection} setSelection={setSelection} />

				<div id="container-display">
					<Details details={data[selection]} />
					<FormReview appendReview={appendReview} />
					<Reviews selection={selection} postedReviews={postedReviews} />
				</div>
			</div>
		</div>
	);
}

export { data };
export default App;
