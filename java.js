const { JSDOM } = require('jsdom');
const { window } = new JSDOM(`<!DOCTYPE html><html><body><div id="navbar"></div><div class="carousel-slider"><div class="carousel-list"><div class="carousel-item">Item 1</div><div class="carousel-item">Item 2</div><div class="carousel-item">Item 3</div></div></div><ul class="menu"><li>Home</li><li>TV Shows</li><li>Movies</li><li>New & Popular</li><li>My List</li></ul><div class="my-list flex" style="display: none;"><div class="list-item"><img src="./images/The Notebook.jpg" alt="The Notebook"><div class="list-item-details"><h4>The Notebook</h4><p>Romance, Drama</p></div></div><div class="list-item"><img src="./images/Baby Driver.jpg" alt="Baby Driver"><div class="list-item-details"><h4>Baby Driver</h4><p>Action, Romance, Comedy</p></div></div><div class="list-item"><img src="./images/Anyone but you.jpg" alt="Anyone but you"><div class="list-item-details"><h4>Anyone but you</h4><p>Romance, Comedy</p></div></div><div class="list-item"><img src="./images/Pride & Prejudice.jpg" alt="Pride & Prejudice"><div class="list-item-details"><h4>Pride & Prejudice</h4><p>Romance, Drama</p></div></div><div class="list-item"><img src="./images/The world of the Married.jpg" alt="The world of the Married"><div class="list-item-details"><h4>The World of the Married</h4><p>Dark, Suspense, Romance</p></div></div><div class="list-item"><img src="./images/SpyxFamily.jpg" alt="SpyxFamily"><div class="list-item-details"><h4>SpyxFamily</h4><p>Action, Romance, Comedy</p></div></div><div class="list-item"><img src="./images/The Holiday.jpg" alt="The Holiday"><div class="list-item-details"><h4>The Holiday</h4><p>Romance, Drama</p></div></div><div class="list-item"><img src="./images/Queen.jpg" alt="Queen"><div class="list-item-details"><h4>Queen</h4><p>Comedy, Drama</p></div></div><div class="list-item"><img src="./images/Set it up.jpg" alt="Set it up"><div class="list-item-details"><h4>Set it up</h4><p>Romance, Comedy, Drama</p></div></div></div></body></html>`);
const document = window.document;

function carousel() {
    let carouselSlider = document.querySelector(".carousel-slider");
    let list = document.querySelector(".carousel-list");
    let list2;

    const speed = 1;
    let x = 0;
    let x2 = list.offsetWidth;
    const width = list.offsetWidth;

    function clone() {
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);
        list2.style.left = `${width}px`;
    }

    function moveFirst() {
        x -= speed;

        if (Math.abs(x) <= width) {
            list.style.left = `${x}px`;
        } else {
            x = width;
        }
    }

    function moveSecond() {
        x2 -= speed;

        if (Math.abs(x2) <= width) {
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

    // Wait for the DOM to fully load before selecting elements
    document.addEventListener("DOMContentLoaded", function() {
        // Toggle My List visibility
        let myListSection = document.querySelector(".my-list");
        let myListButton = document.querySelector(".menu li:nth-child(5)"); // Assuming "My List" is the 5th item in the menu

        if (myListButton) {
            myListButton.addEventListener("click", function() {
                myListSection.style.display = (myListSection.style.display === "none" || myListSection.style.display === "") ? "flex" : "none";
            });
        } else {
            console.error("My List button not found!");
        }
    });
}


carousel();
