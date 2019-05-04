function menuIcon() {
  let x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " phoneMenu";
  } else {
    x.className = "nav";
  }
}

function openContent(evt, content) {
	let i, tabcontent, tablinks;
	//surenkam visus tab-content i array
	tabcontent = document.getElementsByClassName("tab-content");
	//ir  visiem uzdedam display: none.
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";}
	//uzdedam paklikintam tab-content .active klase
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	evt.currentTarget.className += " active";
	//parenkam tab-content kurio id="content" ir padarom jo display: block;
	document.getElementById(content).style.display = "flex";
	//document.getElementsByClassName("tab-content")[0].style.display = "flex";
	//document.getElementById("defaultOpen").click();
}
