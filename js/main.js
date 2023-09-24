// elements
const headerText = document.getElementById("header-text");
let progressArr = document.querySelectorAll(".progress-bar");

//variables
let widths = ["95%", "80%", "90%"];
// plguins
let typed = new Typed(headerText, {
  strings: ["MohammedGad", "Frontend", "Backend"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  loopCount: Infinity,
});
const typed_text = new Typed("#typed-ele", {
  strings: ["Jerry Daniels", "UI / UX DESIGNER", " WEB DEVELOPER"],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
  backSpeed: 100,
});

//events
 
$(window).on("load", function () {
  $(".splash-page-up").animate({ height: 0, opacity: 0 }, 1500);
  $(".splash-page-down").animate({ height: 0, opacity: 0 }, 1500, function () {
    $(".splash-page").css({ visibility: "hidden" });
  });
  console.log($(".navbar"));
  $(".loader-circle").animate({ opacity: 0 }, 2000);
  $('.count').counterUp({
    delay: 10,
    time: 1000
});
  $(window).on("scroll", () => {
    
    if ($(window).scrollTop() >= 300) {
      for (let i = 0; i < progressArr.length; i++) {
        $(`#${progressArr[i].id}`).css(
          { width: `${widths[i]}` },
          1000,
          "linear"
        );
      }
    }
  });
});

//progress_bar
$(window).on("scroll", () => {
  if ($(window).scrollTop() >= 300) {
    for (let i = 0; i < progressArr.length; i++) {
      $(`#${progressArr[i].id}`).css({ width: `${widths[i]}` }, 1000, "linear");
    }
  }

})

