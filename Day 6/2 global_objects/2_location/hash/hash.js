// anchor creation, this is how bookmarks and client side routing are possible

window.addEventListener("hashchange", function () {
  const hash = window.location.hash;

  this.document.getElementById("Index-section").style.display = "none";
  this.document.getElementById("products-section").style.display = "none";
  this.document.getElementById("about-section").style.display = "none";

  if (hash === "#products") {
    this.document.getElementById("products-section").style.display = "flex";
  } else if (hash === "#about") {
    this.document.getElementById("about-section").style.display = "flex";
  } else if (hash === "#index") {
    this.document.getElementById("Index-section").style.display = "flex";
  }
});

if (hash === "#products") {
  this.document.getElementById("products-section").style.display = "flex";
} else if (hash === "#about") {
  this.document.getElementById("about-section").style.display = "flex";
} else if (hash === "#index") {
  this.document.getElementById("Index-section").style.display = "flex";
}
