function menuIcon() {
  let x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " phoneMenu";
  } else {
    x.className = "nav";
  }
}
