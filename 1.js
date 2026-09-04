document.addEventListener("DOMContentLoaded", function () {

/* =========================================
   PRELOADER
========================================= */

const preloader =
    document.getElementById("preloader");


window.addEventListener("load", function () {

    if (preloader) {

        setTimeout(function () {

            preloader.classList.add("hide");

        }, 700);

    }

});


/* Caso o evento load já tenha acontecido */

setTimeout(function () {

    if (preloader) {

        preloader.classList.add("hide");

    }

}, 1800);


/* =========================================
   HEADER AO ROLAR
========================================= */

const header =
    document.getElementById("header");


function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =========================================
   MENU MOBILE
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle(
                "active"
            );

        }
    );


    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navigation.classList.remove(
                        "active"
                    );

                }
            );

        }
    );

}


/* =========================================
   ANIMAÇÕES DE ENTRADA
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );


function revealElements() {

    const triggerPoint =
        window.innerHeight * 0.85;


    animatedElements.forEach(
        function (element) {

            const elementTop =
                element.getBoundingClientRect().top;


            if (elementTop < triggerPoint) {

                element.classList.add("active");

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealElements
);

revealElements();


/* =========================================
   MODAL LION CHURCH
========================================= */

const modal =
    document.getElementById("modal");

const openModal =
    document.getElementById("openModal");

const closeModal =
    document.getElementById("closeModal");

const closeModalBackground =
    document.getElementById(
        "closeModalBackground"
    );

const modalButton =
    document.getElementById("modalButton");


function openLionModal() {

    if (!modal) {
        return;
    }

    modal.classList.add("active");

    document.body.classList.add(
        "modal-open"
    );

}


function closeLionModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );

}


if (openModal) {

    openModal.addEventListener(
        "click",
        openLionModal
    );

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeLionModal
    );

}


if (closeModalBackground) {

    closeModalBackground.addEventListener(
        "click",
        closeLionModal
    );

}


if (modalButton) {

    modalButton.addEventListener(
        "click",
        closeLionModal
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ) {

            closeLionModal();

        }

    }
);


/* =========================================
   ANO AUTOMÁTICO
========================================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================
   CONTADOR LION CHURCH
========================================= */

/*
   DATA TEMPORÁRIA.

   Quando a data oficial da Lion Church
   for definida, altere a linha abaixo.

   Formato:
   "December 31, 2026 19:00:00"
*/

const conferenceDate =
    new Date(
        "December 31, 2026 19:00:00"
    ).getTime();


const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        conferenceDate - now;


    if (difference <= 0) {

        if (daysElement) {
            daysElement.textContent = "00";
        }

        if (hoursElement) {
            hoursElement.textContent = "00";
        }

        if (minutesElement) {
            minutesElement.textContent = "00";
        }

        if (secondsElement) {
            secondsElement.textContent = "00";
        }

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );


    if (daysElement) {

        daysElement.textContent =
            String(days).padStart(2, "0");

    }


    if (hoursElement) {

        hoursElement.textContent =
            String(hours).padStart(2, "0");

    }


    if (minutesElement) {

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

    }


    if (secondsElement) {

        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    }

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================
   PARALLAX SUAVE NO EMBLEMA
========================================= */

const emblem =
    document.querySelector(
        ".emblem-image"
    );


if (emblem) {

    window.addEventListener(
        "mousemove",
        function (event) {

            const width =
                window.innerWidth;

            const height =
                window.innerHeight;


            const x =
                (event.clientX - width / 2)
                / width;

            const y =
                (event.clientY - height / 2)
                / height;


            const moveX =
                x * 8;

            const moveY =
                y * 8;


            emblem.style.transform =
                "translate(" +
                moveX +
                "px, " +
                moveY +
                "px)";

        }
    );

}

});