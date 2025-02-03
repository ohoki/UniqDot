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
$(document).ready(function () {
    createMobileMenuEvent();
});

function createMobileMenuEvent() {
    clickMenuEvent();
    clickCloseEvent();
    clickModalBackEvent();
    clickMajorCategoryEvent();
    handleWindowEvent();
}

function clickMenuEvent() {
    $(document).on("click", ".menu", function() {
        $(".left_gnbWrap").addClass("on");
        $(".mo_bg").show();
    });
}

function clickCloseEvent() {
    $(document).on("click", ".close", function(event) {
        event.preventDefault();
        $(".left_gnbWrap").removeClass("on");
        $(".mo_bg").hide();

        setTimeout(function () {
            $(".mb_major-category").removeClass("on");
            $(".left_gnb>li ul").slideUp();
        }, 300);
    });
}

function clickModalBackEvent() {
    $(document).on("click", ".mo_bg", function(event) {
        event.preventDefault();
        $(".left_gnbWrap").removeClass("on");
        $(".mo_bg").hide();
    });
}

function clickMajorCategoryEvent() {
    $(document).on("click", ".mb_major-category", function() {
        let ul = $(this).siblings("ul");
        let check = $(this).hasClass("on");

        if (check) {
            $(this).removeClass("on");
            ul.stop(true, true).slideUp();
        } else {
            $(".mb_major-category").removeClass("on");
            $(".left_gnb>li ul").stop().slideUp();
            $(this).addClass("on");
            ul.stop(true, true).slideDown();
        }
    });
}

function handleWindowEvent() {
    $(window).resize(function () {
        $(".left_gnbWrap").removeClass("on");
    });

    $(window).scroll(function (event) {
        event.preventDefault();
        $(".left_gnbWrap").removeClass("on");
        $(".mo_bg").hide();
    });
}

// Footer
$(window).ready(function () {
    $(window).scroll(function () {
        displayTopButton();
    });
});

function displayTopButton() {
    $(window).scrollTop() > 100 ? $("#top_btn").fadeIn() : $("#top_btn").fadeOut();
}

$(document).on("click", "#top_btn", function () {    
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
});