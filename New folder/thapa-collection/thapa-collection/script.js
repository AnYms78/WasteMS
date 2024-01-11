const category = document.querySelector("#category");
const arrow = document.querySelector("#drop-arrow");
const catProduct = document.querySelectorAll(".cat-prod");
const overlay = document.querySelector(".overlay");

const categoryContainer = document.querySelector(".category-cont");

overlay.addEventListener("click", () => {
    if (categoryContainer.classList.contains("category-toggle")) {
        arrow.classList.toggle("drop-arrow-toggle");
        categoryContainer.classList.toggle("category-toggle");
        document.querySelector('.overlay').style.display = document.querySelector('.overlay').style.display === 'block' ? 'none' : 'block';
    }
});

category.addEventListener('click', () => {
    arrow.classList.toggle("drop-arrow-toggle");
    categoryContainer.classList.toggle("category-toggle");
    document.querySelector('.overlay').style.display = document.querySelector('.overlay').style.display === 'block' ? 'none' : 'block';
});

const imageList = ['./assets/black friday.png', './assets/weekend.jpg', './assets/weekend2.webp'];
const img = document.getElementById('img-slider');

let activeImage = 0;
img.src = './' + imageList[activeImage];
setInterval(() => {
    activeImage++;
    if (activeImage == 3) {
        activeImage = 0;
    };
    img.src = './' + imageList[activeImage];
}, 2000);

let card = document.querySelector(".card");
let x = document.getElementsByClassName("cross");
count = 4;
let popup = setInterval(() => {
    document.querySelector(".contents").style.filter = "blur(10px)";
    card.removeAttribute('class', 'hide');
    card.setAttribute('class', 'card');

    let countDown = setInterval(function () {
        if (count == 0) {
            x[0].innerHTML = "X";
            x[0].addEventListener("click", () => {
                card.setAttribute('class', 'hide');
                document.querySelector(".contents").style.filter = "none";
            })
        } else {
            x[0].innerHTML = count;
            count--;
        }
    }, 1000);
    clearInterval(popup);
}, 2000);


let addToCart = document.querySelectorAll(".addCart");
let cart = document.querySelector(".added-cart");
let cartItem = cart.textContent;
addToCart.forEach((btn) => {
    btn.addEventListener('click', () => {
        cartItem = eval(cartItem + 1);
        cart.textContent = cartItem;
    })
});
