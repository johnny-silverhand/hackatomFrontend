const burg = $(".js-burg");
const menuMobile = $(".js-menu");

burg.on("click", () => {
  const isMenuHaveActiveClass = menuMobile.hasClass("active");

  if (isMenuHaveActiveClass) {
    menuMobile.removeClass("active");
    burg.removeClass("active");
    return;
  }
  menuMobile.addClass("active");
  burg.addClass("active");
});

$(window).resize(() => {
  menuMobile.removeClass("active");
  burg.removeClass("active");
});
