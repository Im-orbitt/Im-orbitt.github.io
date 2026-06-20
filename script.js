const header = document.querySelector("header");
const topBtn = document.getElementById("top-btn");


window.addEventListener("scroll", () => {

    const scroll = window.scrollY;


    if (scroll < 200) {

        header.classList.remove("fade");
        header.classList.remove("gone");

        topBtn.classList.remove("show");

    }

    else if (scroll < window.innerHeight) {

        header.classList.add("fade");
        header.classList.remove("gone");

        topBtn.classList.add("show");

    }

    else {

        header.classList.add("gone");
        header.classList.remove("fade");

        topBtn.classList.add("show");

    }

});



topBtn.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};



document.getElementById("year").textContent =
new Date().getFullYear();