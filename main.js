let curSlide = 0;
let slides = document.getElementsByClassName("slide");

function ShowRightImg() {
    curSlide++;
    curSlide = curSlide > slides.length - 1 ? 0 : curSlide;
    for (let i = 0; i < slides.length; i++) {
        if (i != curSlide) {
            slides[i].classList.add("hidden");
            slides[i].classList.remove("active")
        }
        else {
            slides[curSlide].classList.add("active");
            slides[curSlide].classList.remove("hidden");
        }
    }
}

function ShowLeftImg() {
    curSlide--;
    curSlide = curSlide < 0 ? slides.length - 1 : curSlide;
    for (let i = 0; i < slides.length; i++) {
        if (i != curSlide) {
            slides[i].classList.add("hidden");
            slides[i].classList.remove("active")
        }
        else {
            slides[curSlide].classList.add("active");
            slides[curSlide].classList.remove("hidden");
        }
    }
}