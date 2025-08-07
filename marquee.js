// ************************ marquee (latest news) ************************
jQuery(document).ready(function ($) {
  function startMarquee() {
    let marqueeWrapper = $(".marquee-wrapper");
    let newsItems = $(".marquee-content");
    let containerWidth = $(".marquee-container").width();
    let totalWidth = 0;
    let speed = 20000;

    newsItems.each(function () {
      totalWidth += $(this).outerWidth(true) + 50;
    });

    function animateMarquee() {
      marqueeWrapper
        .css({ right: "100%" })
        .animate(
          { right: -totalWidth + "px" },
          totalWidth * (speed / 1000),
          "linear",
          function () {
            marqueeWrapper.css({ right: "100%" });
            animateMarquee();
          }
        );
    }

    animateMarquee();
  }

  startMarquee();
});
