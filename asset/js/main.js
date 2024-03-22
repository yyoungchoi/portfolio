gsap.registerPlugin(ScrollTrigger);

$(".sc-project li").each(function () {
  $(this).on("mouseover", () => {
    $(this).siblings().find("img").removeClass("on");
    $(this).find("img").addClass("on");
  });
  $(this).on("mouseout", () => {
    $(this).find("img").removeClass("on");
    // $(".sc-project li:first-child").find("img").addClass("on");
  });
});

$(document).on("mousemove", function (e) {
  x = e.clientX;
  y = e.clientY;
  gsap.to(".cursor", {
    x: x,
    y: y,
    zIndex: 100,
  });
});
const cursor = $(".cursor");
function moveCursor(e) {
  gsap.to(cursor, {
    duration: 0,
    x: e.clientX,
    y: e.clientY,
  });
}
$(document).on("mousemove", moveCursor);
$("a").on({
  mouseover: function () {
    gsap.to(".cursor", {
      scale: 1.5,
    });
  },
  mouseleave: function () {
    gsap.to(".cursor", {
      scale: 1,
    });
  },
});
