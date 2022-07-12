let timeOut = false;
let pageLoaded = false;

let mainPage = document.getElementById("main-page");

setTimeout(() => {
    timeOut = true;
    if (pageLoaded) {
        mainPage.style.display = "block";
        setTimeout(() => {transformFunction2()}, 800);
        svgAnimation();
    }
}, 3000);

function mainPageLoaded() {
    pageLoaded = true;
    if (timeOut) {
        mainPage.style.display = "block";
        // transformFunction2();
        setTimeout(() => {transformFunction2()}, 800);
        svgAnimation();
    }
}

function transformFunction() {
    $('.transform-out-of-place1').each(function () {
        let bottom_of_object = $(this).offset().top;
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object + 150) {
            $(this).addClass('transform-in-place');
        } else {
            $(this).removeClass('transform-in-place');
        }
    });

    $('.transform-out-of-place2').each(function (i) {
        let bottom_of_object = $(this).offset().top;
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object + 150) {
            $(this).addClass('transform-in-place');
        } else {
            $(this).removeClass('transform-in-place');
        }
    });
}

function transformFunction2() {
    $('.transform-out-of-place3').each(function () {
        let bottom_of_object = $(this).offset().top;
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object + 150) {
            $(this).addClass('transform-in-place');
        } else {
            $(this).removeClass('transform-in-place');
        }
    });
}

const form = document.getElementById("detailsForm");

form.addEventListener('submit', (event) => {
    let nameValue = form.elements["name"];
    let emailValue = form.elements["email"];
    let mobileValue = form.elements["mobile"];
    let messageValue = form.elements["message"];

    if (nameValue && emailValue && messageValue ) {
        let mobileNumber = ""
        if (mobileValue.value.length > 0) {
            mobileNumber = ", Ph. " + mobileValue.value;
        }
        window.open('mailto:parva.c.patel@gmail.com?subject=Contact Request from portfolio: '+ nameValue.value + ' (' + emailValue.value + mobileNumber + ')' + '&body=' + messageValue.value);
    }
});

$(document).ready(function () {
    transformFunction();
    $(window).scroll(transformFunction);
    $().UItoTop({ easingType: 'easeOutQuart' });
});