const display = document.getElementById("display-area");
const form = document.getElementById("search-area");
const pagging = document.getElementById("pick_a_page");
const displayTerm = document.getElementById("search-term");
let search_term = "welcome";

function main(search = search_term, page = "1") {
  display.innerHTML = "";
  pagging.innerHTML = "";
  displayTerm.innerHTML = `Searching for ${search} page ${page}`;
  fetch(`http://www.omdbapi.com/?apikey=9ae4f582&s=${search}&page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response) {
        data.Search.forEach((ele) => {
          display.innerHTML += displyMovie(ele);
        });

        for (i = 0; i < Math.floor(data.totalResults / 10); i++) {
          pagging.append(createButton(i + 1));
        }

        let butt = document.querySelectorAll(".btn");
        let details = document.querySelectorAll(".details");
        let pageButtons = document.querySelectorAll(".pagebuttons");

        butt.forEach((btn, idx) => {
          btn.addEventListener("click", function () {
            details[idx].style.display =
              details[idx].style.display == "block" ? "none" : "block";
          });
        });

        pageButtons.forEach((btn) => {
          if (btn.textContent === page) {
            btn.style.backgroundColor = "chartreuse";
          }
        });
      } else {
        console.log("Failed to search for ", search);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}

main();

form.onsubmit = function (event) {
  event.preventDefault();
  search_term = form.firstElementChild.value;
  main();
};

function createButton(text) {
  const button = document.createElement("button");
  button.addEventListener("click", function () {
    main(search_term, `${text}`);
  });
  button.classList.add(["pagebuttons"]);
  button.textContent = text;
  return button;
}

function displyMovie(movie) {
  return `
    <div>
      <img src="${movie.Poster}" class="images" alt="${movie.Title} poster" />
      <h3>Title: ${movie.Title}</h1>
      <button class="btn">details</button>
      <div class="details">
        <p>Type: ${movie.Type}</p>
        <p>Release: ${movie.Year}</p>
        <p>id: ${movie.imdbID}</p>
      </div>
    </div>
  `;
}
