$("p").hide();

$("#dropdownMenu").hide();


function max(x) {
    if (x.matches) { // If media query matches
        $("#dropdownMenu").show();
        $("#menu").hide();
        $("#dropdownMenu").css("margin-bottom", "4vh");
        $('nav').css("border-bottom", "1px #dadada solid");
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }

  function min(y) {
    if (y.matches) { // If media query matches
        $("#dropdownMenu").hide();
        $("#menu").show();
        $("#dropdownMenu").css("margin-bottom", "4vh");
        $('nav').css("border-bottom", "1px #dadada solid");
    } else {
     document.body.style.backgroundColor = "yellow";
    }
  }

  var y = window.matchMedia("(min-width: 766px)")
  min(y);
  y.addListener(y);

  var x = window.matchMedia("(max-width: 766px)")
  max(x) // Call listener function at run time
  x.addListener(max) // Attach listener function on state changes

