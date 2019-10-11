$.extend($.easing,
  {
    easeOutCirc: function (x, t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }
  });
// fim do plugin


$("a").click(function (e) {
  e.preventDefault();

  var anc = this.hash;

  $("html, body").animate({
    scrollTop: $(anc).offset().top
  }, { duration: 2000, easing: 'easeOutCirc' });
});
