document.addEventListener("DOMContentLoaded", function () {
    fetch("/common/header.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header").innerHTML = data;
    });

    fetch("/common/footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("footer").innerHTML = data;
        displayTopButton();
    });
});

//Header


// Footer
$(document).on("click", "#top_btn", function () {    
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
});

$(window).ready(function () {
    $(window).scroll(function () {
        displayTopButton();
    });
});

function displayTopButton() {
    $(window).scrollTop() > 100 ? $("#top_btn").fadeIn() : $("#top_btn").fadeOut();
}