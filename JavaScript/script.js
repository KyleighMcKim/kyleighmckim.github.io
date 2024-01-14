let currentSlide = 1;

function changeSlide(i) {
    showSlide(currentSlide += i);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) {
        currentSlide = 1;
    }    
    if (n < 1) {
        currentSlide = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[currentSlide - 1].style.display = "block";  
}
