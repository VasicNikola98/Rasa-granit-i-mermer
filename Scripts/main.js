$(document).ready(function () {
  const btnScrollTop = document.querySelector("#scrollToTopBtn");
  const btnMessenger = document.querySelector("#messenger-widget-btn");
  const btnPhone = document.querySelector("#phone-widget-btn");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (window.pageYOffset > 300) {
      btnScrollTop.style.display = "block";
      btnMessenger.style.display = "block";
      btnPhone.style.display = "block";
      btnScrollTop.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    } else {
      btnScrollTop.style.display = "none";
      btnPhone.style.display = "none";
      btnMessenger.style.display = "none";
    }
  }

  $(".load-wrapper").fadeOut();
});
