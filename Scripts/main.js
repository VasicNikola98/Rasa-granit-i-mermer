$(document).ready(function() {

    const btnScrollTop = document.querySelector("#scrollToTopBtn");

    window.addEventListener("scroll", scrollFunction);

    function scrollFunction () {
        if(window.pageYOffset > 300)
        {
            btnScrollTop.style.display = "block";
            btnScrollTop.addEventListener("click", function() {
        
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                });
            });
        }
        else
        {
            btnScrollTop.style.display = "none";
        }
    }

    $(".load-wrapper").fadeOut();
    
});