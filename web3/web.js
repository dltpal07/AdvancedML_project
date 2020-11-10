/* HEADER */
window.onload = function() { scrollFuncion() };
window.onscroll = function() { scrollFuncion() };

function scrollFuncion() {
    var header = document.getElementById('header');

    if (document.documentElement.scrollTop > 70) {
        if (!header.classList.contains('navbar-fixed')) {
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function() {
                header.style.display = 'block';
            }, 40);
        }
    } else {
        if (header.classList.contains('navbar-fixed')) {
            header.classList.remove('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}

function menuToggle() {
    document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);

/* WELCOME AREA */
var imageSlideIndex = 1;

showImageSlides(imageSlideIndex);

function imageSlideTimer() {
    plusImageSlides(1);
}

var imageTimer = setInterval(imageSlideTimer, 3000);


function plusImageSlides(n) {
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3000);

    showImageSlides(imageSlideIndex += n);
}

function currentImageSlide(n) {
    showImageSlides(imageSlideIndex = n);
}

function showImageSlides(n) {
    var i;
    var slides = document.getElementsByClassName('image-slide');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) { imageSlideIndex = 1 }
    if (n < 1) { imageSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[imageSlideIndex - 1].style.display = 'block';
    dots[imageSlideIndex - 1].className += ' active';
}

document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null, -1));
document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null, 1));

document.getElementById('firstDot').addEventListener('click', currentImageSlide.bind(null, 1));
document.getElementById('secondDot').addEventListener('click', currentImageSlide.bind(null, 2));
document.getElementById('thirdDot').addEventListener('click', currentImageSlide.bind(null, 3));
document.getElementById('forthDot').addEventListener('click', currentImageSlide.bind(null, 4));
document.getElementById('fifthDot').addEventListener('click', currentImageSlide.bind(null, 5));

/* Technology Area */
filterSelection('all');

function filterSelection(id) {
    var x, i;
    x = document.getElementsByClassName('listItem');
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], 'active');
    }
    addClass(document.getElementById(id), 'active');

    x = document.getElementsByClassName('filterItem');
    if (id == 'all') id = ''; // return 0
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], 'show');
        if (x[i].className.indexOf(id) > -1) {
            addClass(x[i], 'show');
        }
    }
}

function addClass(element, name) {
    if (element.className.indexOf(name) == -1) {
        element.className += " " + name;
    }
}

function removeClass(element, name) {
    var arr;
    arr = element.className.split(" ");

    while (arr.indexOf(name) > -1) {
        arr.splice(arr.indexOf(name), 1);
    }

    element.className = arr.join(" ");

}

document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
document.getElementById('data').addEventListener('click', filterSelection.bind(null, 'data'));
document.getElementById('model').addEventListener('click', filterSelection.bind(null, 'model'));

function viewTechnology(event) {
    var polyNode = event.target;
    if (polyNode.tagName.toLowerCase() == 'i') { polyNode = polyNode.parentNode; }

    var overlayNode = polyNode;
    var imageNode = overlayNode.nextElementSibling;

    var itemNode = overlayNode.parentNode;
    var mainNode = itemNode.nextElementSibling;
    var subNode = mainNode.nextElementSibling;
    var textNode = subNode.nextElementSibling;

    document.getElementById('modalImage').src = imageNode.src;
    document.getElementById('modalMain').innerHTML = mainNode.innerHTML;
    document.getElementById('modalSub').innerHTML = subNode.innerHTML;
    document.getElementById('modalText').innerHTML = textNode.innerHTML;

    document.getElementById('technologyModal').style.display = 'block';
}

document.getElementById('modalClose').addEventListener('click', function() {
    document.getElementById('technologyModal').style.display = 'none';
})

var filterItems = document.getElementsByClassName('overlay');
for (var i = 0; i < filterItems.length; i++) {
    filterItems[i].addEventListener('click', viewTechnology);
}

/* NAVBAR ANCHOR */

function moveTo(id) {
    if (id == 'brand') {
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, document.getElementById(id).offsetTop - 70);
    }

    document.getElementById('menu').classList.remove('show');
}

document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null, 'brand'));
document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null, 'about'));
document.getElementById('navbarService').addEventListener('click', moveTo.bind(null, 'service'));
document.getElementById('navbarTechnology').addEventListener('click', moveTo.bind(null, 'technology'));
document.getElementById('navbarReview').addEventListener('click', moveTo.bind(null, 'review'));
document.getElementById('navbarDeveloper').addEventListener('click', moveTo.bind(null, 'developer'));