if (localStorage.getItem('theme')) {
  theme_dark();
}

$('#switch_theme').on("click", function() {
  if (localStorage.getItem('theme') === "dark") {
    theme_light();
    localStorage.clear();
  } else {
    theme_dark();
    localStorage.setItem('theme', "dark");
  }
});


function theme_dark() {
  $('p').addClass('theme-dark');
  $('body').addClass('theme-dark');
  $('nav').removeClass("navbar-light bg-light").addClass("navbar-dark bg-dark");
  $('.card').addClass("bg-dark text-ligth border border-secondary");
  $('.card-title').addClass("text-light");
  $('.bg-light').removeClass('bg-light').addClass("bg-dark");
  $("#filters_panel").removeClass("bg-light").addClass("bg-dark");
  $('.text-dark').removeClass('text-dark').addClass('text-light');
  $('.btn-outline-dark').removeClass('btn-outline-dark').addClass('btn-outline-light');
  $('hr').addClass('text-light');
  $('.search_product').addClass('bg-dark text-light');
  $('.btn-secondary').removeClass('btn-secondary').addClass('btn-light');
  $('#switch_theme').html(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1.5a7 7 0 100-14 7 7 0 000 14zm12-7a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h2.5A.75.75 0 0124 12zM4 12a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h2.5A.75.75 0 014 12zm16.485-8.485a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 01-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM6.343 17.657a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 11-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM12 0a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0V.75A.75.75 0 0112 0zm0 20a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0112 20zM3.515 3.515a.75.75 0 011.06 0l1.768 1.768a.75.75 0 11-1.06 1.06L3.515 4.575a.75.75 0 010-1.06zm14.142 14.142a.75.75 0 011.06 0l1.768 1.768a.75.75 0 01-1.06 1.06l-1.768-1.767a.75.75 0 010-1.061z'></path></svg>"
  )
}

function theme_light() {
  $('p').removeClass('theme-dark');
  $('body').removeClass('theme-dark');
  $('nav').addClass("navbar-light bg-light").removeClass("navbar-dark bg-dark");
  $('.card').removeClass("bg-dark text-ligth border-secondary border-2 border-bottom");
  $('.card-title').removeClass("text-light");
  $('.bg-dark').addClass('bg-light').removeClass("bg-dark");
  $("#filters_panel").removeClass("bg-dark").addClass("bg-light")
  $('.text-light').addClass('text-dark').removeClass('text-light');
  $('.btn-outline-light').addClass('btn-outline-dark').removeClass('btn-outline-light');
  $('hr').removeClass('text-light');
  $('#search_product').addClass('bg-light text-dark');
  $('.btn-light').removeClass('btn-light').addClass('btn-secondary');
  $('#switch_theme').html(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill-rule='evenodd' d='M16.5 6c0 5.799-4.701 10.5-10.5 10.5-.426 0-.847-.026-1.26-.075A8.5 8.5 0 1016.425 4.74c.05.413.075.833.075 1.259zm-1.732-2.04A9.08 9.08 0 0114.999 6a9 9 0 01-11.04 8.768l-.004-.002a9.367 9.367 0 01-.78-.218c-.393-.13-.8.21-.67.602a9.938 9.938 0 00.329.855l.004.01A10.002 10.002 0 0012 22a10.002 10.002 0 004.015-19.16l-.01-.005a9.745 9.745 0 00-.855-.328c-.392-.13-.732.276-.602.67a8.934 8.934 0 01.218.779l.002.005z'></path></svg>"
  )
}
