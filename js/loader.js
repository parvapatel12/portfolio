const LANDING = {};

LANDING.intro = document.getElementById("preloader-page");
LANDING.path = document.getElementById("animation-path");

let loadingPage = document.getElementById("loading-page");

const svgAnimation = () => {
    anime({
        targets: LANDING.intro,
        duration: 1500,
        easing: "easeInOutSine",
        translateY: "-200vh"
    });

    anime({
        targets: LANDING.path,
        duration: 1000,
        easing: "easeInOutSine",
        d: LANDING.path.getAttribute("pathdata:id")
    });

    setTimeout(() => {
        loadingPage.style.display = "none";
    }, 1500);
};

// function showAnimation() {
//     console.log("Reached animator.");
//     const clickMe = document.getElementById("preloader-page");
//     clickMe.addEventListener("click", svgAnimation);
// }
//
// document.onload = showAnimation;

