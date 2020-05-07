function solidHeader() {
  if (window.scrollY > 50) {
    document.getElementById("header").classList.add("black-header");
    document.getElementById("navlist").classList.add("small-nav");
    Array.prototype.forEach.call(
      document.getElementsByClassName("nav-link"),
      (link) => link.classList.add("small-link")
    );
  } else {
    document.getElementById("header").classList.remove("black-header");
    document.getElementById("navlist").classList.remove("small-nav");
    Array.prototype.forEach.call(
      document.getElementsByClassName("nav-link"),
      (link) => link.classList.remove("small-link")
    );
  }
}
