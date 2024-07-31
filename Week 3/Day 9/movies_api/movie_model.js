class Movie {
  constructor(title, plot, releaseDate, poster, genra, isGood) {
    (this.title = title),
      (this.plot = plot),
      (this.releaseDate = releaseDate),
      (this.poster = poster),
      (this.genra = genra),
      (this.isGood = isGood);
  }
}

module.exports = Movie;
