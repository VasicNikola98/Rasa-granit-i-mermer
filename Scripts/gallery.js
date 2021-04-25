$(document).ready(function () {
  $(".gallery-scetion").slice(0, 1).show();

  $("#load-btn").click(function (e) {
    e.preventDefault();
    $(".gallery-scetion:hidden").slice(0, 1).slideDown();

    if ($(".gallery-scetion:hidden").length == 0) {
      document.getElementById("load-btn").style.display = "none";
    }
  });
});
