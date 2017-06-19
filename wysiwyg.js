let people = [
	{
		title: "Actor",
	  name: "Adam West",
	  bio: "Adam west was an American actor widely known for his role as Batman in the 1960s ABC series of the same name and its 1966 theatrical feature film. His career spanned 63 years.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Adam_West_1961.JPG",
	  lifespan: {
	    birth: 1954,
	    death: 2017
	  }
	},
	{
		title: "Actor",
	  name: "Roger Moore",
	  bio: "Sir Roger George Moore was an English actor. He is best known for having played secret agent James Bond in seven feature films from 1973 to 1985. He also played Simon Templar in the television series The Saint from 1962 to 1969.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Sir_Roger_Moore_3_%28cropped%29.jpg",
	  lifespan: {
	    birth: 1945,
	    death: 2017
	  }
	},
	{
		title: "Comedian",
	  name: "Charlie Murphy",
	  bio: "Charlie Murphy was an American actor, comedian and writer. Murphy was best known as a writer and cast member of the Comedy Central sketch-comedy series Chappelle's Show. He was the older brother of Eddie Murphy.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/2/27/CharlieMurphyDec09.jpg",
	  lifespan: {
	    birth: 1959,
	    death: 2017
	  }
	},
	{
		title: "Actress",
	  name: "Mary Tyler Moore",
	  bio: "Mary Tyler Moore was an American actress, known for her roles in the television sitcoms The Mary Tyler Moore Show (1970–1977), in which she starred as Mary Richards, a single woman working as a local news producer in Minneapolis, and The Dick Van Dyke Show (1961–1966), in which she played Laura Petrie, a former dancer turned Westchester homemaker, wife and mother.[1][2][3][4] Her film work includes 1967's Thoroughly Modern Millie and 1980's Ordinary People, in which she played a role that was very different from the television characters she had portrayed, and for which she was nominated for an Academy Award for Best Actress.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Mary_Tyler_Moore_rework.jpg",
	  lifespan: {
	    birth: 1936,
	    death: 2017
	  }
	}
];

let textInput = document.getElementById('text-input');

let outputDiv = document.getElementById('output');

people.forEach(function(person) {
	// console.log(person);
	let personTemplate =
	`
	  <header>${person.name}, ${person.title}</header>
	  <section><img src="${person.image}"><p>${person.bio}</p></section>
	  <footer>Born: ${person.lifespan.death}, Died: ${person.lifespan.death}</footer>
	`;
	let personElement = document.createElement('article');
	personElement.classList.toggle('person');
	// personElement.classList.toggle('inactive');
	personElement.innerHTML = personTemplate;
	personElement.addEventListener('click', function() {
		let peopleList = document.querySelectorAll('.person');
		peopleList.forEach(function(peopleListPerson) {
			console.log(peopleListPerson);
			peopleListPerson.classList.remove('active')
		});
		personElement.classList.toggle('active');

		textInput.value = document.querySelector('.active p').innerHTML;

		textInput.focus();
	});
	outputDiv.appendChild(personElement);
});

textInput.addEventListener('keyup', function() {
	if (event.key === "Enter") {
		textInput.value = '';

	} else {
		document.querySelector('.active p').innerHTML = textInput.value;
	}
});


