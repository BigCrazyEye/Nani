function menuIcon() {
  let x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " phoneMenu";
  } else {
    x.className = "nav";
  }
};

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
};

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
