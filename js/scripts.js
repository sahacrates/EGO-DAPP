document.querySelector('.menu-button').addEventListener('click', function () {
    document.querySelector('.app-left').classList.add('show');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    document.querySelector('.app-left').classList.remove('show');
});

$(window)
  .resize(function () {
    if ($(window).width() < 1090) {
      $(".header").hide();
    } else {
      $(".header").show();
    }
  })
  .resize();