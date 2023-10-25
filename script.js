$(document).ready(function () {
    $(window).scroll(function () {
        // sniki skrol 
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Przycisk up / down 
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up 
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        // delete scroll up/donw/silenceup
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        //  again scroll on menu 
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // animacja tekstu 
    var typed = new Typed(".typing", {
        strings: ["Wielkanoc", "Potrawy wielkanocne", "Wielkanocne śniadanie", "Wielkanocne śniadanie", "Wielkanocne śniadanie"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Wielkanoc", "Wielki czwartek", "Wielki piątek", "Wielka sobota", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
    /*spadjaćce jajka*/
    const createSnow = () => {
        const snowflake = document.createElement('i')
        snowflake.classList.add('snowflake')
        snowflake.textContent = '🐰',

            snowflake.style.right = Math.random() * window.innerWidth + 'px'
        snowflake.style.animationDuration = Math.random() * 6 + 3 + 's'
        snowflake.style.opacity = Math.random()

        document.body.append(snowflake)

        setTimeout(() => {
            snowflake.remove()
        }, 5000)
    }

    setInterval(createSnow, 40)
    });