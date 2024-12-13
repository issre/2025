// Retrieved from codepen.io

// (c) 2020-2021 Written by Simon Köhler in Panama
// github.com/koehlersimon
// simon-koehler.com

document.addEventListener('click', function(e) {
    // Hamburger menu
    if (e.target.classList.contains('hamburger-toggle')) {
        e.target.children[0].classList.toggle('active');
    }
})