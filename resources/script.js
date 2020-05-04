function solidHeader() {
  if (window.scrollY > 50) {
    document.getElementById("header").classList.add("black-header");
  } else {
    document.getElementById("header").classList.remove("black-header");
  }
}
