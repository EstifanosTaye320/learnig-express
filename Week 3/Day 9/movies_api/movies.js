const Movie = require("./movie_model");

const movies = [
  new Movie(
    "estifs Movie",
    "in this movie you will find things that happen in a normal movie but in the estifanos way",
    "2024",
    "https://preview.redd.it/made-some-fake-movie-posters-v0-a58pirtqpj8b1.png?width=1080&crop=smart&auto=webp&s=155553173eb91dcab7d994240cebb609b183e10a",
    "action",
    "true"
  ),
  // Add more movie objects here
  new Movie(
    "The Matrix",
    "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against the machines.",
    "1999",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8wBt1zq5wT1G30UtD706s7tVXiD.jpg",
    "Sci-Fi",
    "true"
  ),
  new Movie(
    "The Shawshank Redemption",
    "Two imprisoned men bond over a period of two decades, finding solace and eventual redemption through acts of common decency.",
    "1994",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "Drama",
    "true"
  ),
  new Movie(
    "The Dark Knight",
    "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "2008",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDZnyW1z1iTT3cfecYZ.jpg",
    "Action",
    "true"
  ),
  new Movie(
    "Inception",
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "2010",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9gk7dHr01NXjRiizGlDkbN1hJ1f.jpg",
    "Sci-Fi",
    "true"
  ),
  new Movie(
    "The Lord of the Rings: The Fellowship of the Ring",
    "A meek hobbit from the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and save Middle-earth from the Dark Lord Sauron.",
    "2001",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6CoRTJTmiK91pASP20zJpnwBL8g.jpg",
    "Fantasy",
    "true"
  ),
  new Movie(
    "The Godfather",
    "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "1972",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7lIVRn5tYXOoAK4P.jpg",
    "Crime",
    "true"
  ),
  new Movie(
    "Pulp Fiction",
    "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner waitresses intertwine in four tales of violence and redemption.",
    "1994",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d568Zq2f9zSG2z478W20G4F3ai.jpg",
    "Crime",
    "true"
  ),
  new Movie(
    "Forrest Gump",
    "A man with a low IQ has accomplished great things in his life and has been present at historic moments, but his true love eludes him.",
    "1994",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w22OM8gQzV8bJkhhVhjPYUq5R1p.jpg",
    "Comedy",
    "true"
  ),
  new Movie(
    "Goodfellas",
    "The story of Henry Hill and his life in the mob, covering his rise to power in the organized crime world and his eventual downfall.",
    "1990",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dC68J8w2k9P166W22rP8qQp1C9.jpg",
    "Crime",
    "true"
  ),
  new Movie(
    "The Silence of the Lambs",
    "A young F.B.I. cadet must interview an imprisoned and manipulative cannibal killer to catch another serial killer, a madman who skins his victims.",
    "1991",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m2U4F3o8zUOYxZ1J672fM9E9xP.jpg",
    "Thriller",
    "true"
  ),
  new Movie(
    "The Lion King",
    "A young lion prince, Simba, is tricked by his jealous uncle Scar into believing he is responsible for his father's death and flees into exile. While in exile he meets a meerkat and a warthog, who teach him the ways of the jungle.",
    "1994",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bWnl004F0Cq0l9J4690P0lU00hG.jpg",
    "Animation",
    "true"
  ),
  new Movie(
    "Spirited Away",
    "A sullen ten-year-old girl wanders into a world of spirits, where her parents have been turned into pigs. In order to save her parents and escape the spirit world, she takes a job working in a bathhouse owned by a witch.",
    "2001",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/g3t6Zv69bPfj0600fX0e4bK9oG8.jpg",
    "Animation",
    "true"
  ),
  new Movie(
    "Titanic",
    "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "1997",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9xjZS2rlVxm8KFvob9iH5p4yf2l.jpg",
    "Romance",
    "true"
  ),
  new Movie(
    "The Lord of the Rings: The Two Towers",
    "Frodo and Sam continue their journey to Mordor to destroy the One Ring, while Aragorn, Legolas, and Gimli search for Merry and Pippin, who have been captured by orcs.",
    "2002",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w22OM8gQzV8bJkhhVhjPYUq5R1p.jpg",
    "Fantasy",
    "true"
  ),
  new Movie(
    "The Lord of the Rings: The Return of the King",
    "The final battle between the forces of good and evil is fought, with the fate of Middle-earth hanging in the balance.",
    "2003",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rCzpDGL1w8lZO3Iwh5Tpv8MRE0o.jpg",
    "Fantasy",
    "true"
  ),
  new Movie(
    "The Avengers",
    "Nick Fury, director of S.H.I.E.L.D., assembles a team of superheroes to combat Loki's plan to conquer Earth.",
    "2012",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eor72Ghe1PVJhL4g8Q801z0q6Y3.jpg",
    "Action",
    "true"
  ),
  new Movie(
    "Avengers: Endgame",
    "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers and their allies assemble once more to reverse Thanos' actions and restore balance to the universe.",
    "2019",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hUwt8dQvF5Qz0we0EVjhzOWjKzU.jpg",
    "Action",
    "true"
  ),
  new Movie(
    "The Dark Knight Rises",
    "Eight years after the Joker's reign of anarchy, Gotham City is forced to confront a new threat - the villainous Bane, who throws the city into chaos.",
    "2012",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1hRoyzDtBUt9G9l7t0F0yoZ364.jpg",
    "Action",
    "true"
  ),
  new Movie(
    "Interstellar",
    "A team of explorers travel through a wormhole in space in an attempt to find a new home for humanity.",
    "2014",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n5iV21oZnOUg7kAm6hPsu8V4HZe.jpg",
    "Sci-Fi",
    "true"
  ),
];
