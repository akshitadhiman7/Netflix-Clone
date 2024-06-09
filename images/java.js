const { JSDOM } = require('jsdom');
const { window } = new JSDOM(`<!DOCTYPE html><html><body><div id="navbar"></div><div class="carousel-slider"><div class="carousel-list"><div class="carousel-item">Item 1</div><div class="carousel-item">Item 2</div><div class="carousel-item">Item 3</div></div></div></body></html>`);
const document = window.document;

let navbar = document.getElementById("navbar");

const toggle = () => {
    navbar.style.display = (navbar.style.display === "none") ? "block" : "none";
};

function carousel() {
    let carouselSlider = document.querySelector(".carousel-slider");
    let list = document.querySelector(".carousel-list");
    let item = document.querySelector(".carousel-item");
    let list2;

    const speed = 1;

    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone() {
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);
        list2.style.left = `${width}px`;
    }

    function moveFirst() {
        x -= speed;

        if (width >= Math.abs(x)) {
            list.style.left = `${x}px`;
        } else {
            x = width;
        }
    }

    function moveSecond() {
        x2 -= speed;

        if (list.offsetWidth >= Math.abs(x2)) {
            list2.style.left = `${x2}px`;
        } else {
            x2 = width;
        }
    }

    function hover() {
        clearInterval(a);
        clearInterval(b);
    }

    function unhover() {
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
    }

    clone();

    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);

    carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();
