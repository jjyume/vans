$(document).ready(function () {
    $('.photo .p1').fadeIn();
    $('.photo .p2, .photo .p3').hide();

    let titleH1s = $('.title h1');
    titleH1s.each(function (index) {
        $(this).on('click', function () {

            $('.photo > div').stop().fadeOut();
            if (index === 0) {
                $('.photo .p1').stop().fadeIn();
            } else if (index === 1) {
                $('.photo .p2').stop().fadeIn();
            } else if (index === 2) {
                $('.photo .p3').stop().fadeIn();
            }

            titleH1s.removeClass('select');
            $(this).addClass('select');
        });
    });
    let main = $("#section .main");
    let main2 = $("#section .main2");

        main.css("opacity", 1);

        function toggleFade() {
            if (main.css("opacity") === "1") {
                main.animate({opacity: 0}, 1000);
                main2.animate({opacity: 1}, 1000);
            } else {
                main.animate({opacity: 1}, 1000);
                main2.animate({opacity: 0}, 1000);
            }
        }

        setInterval(toggleFade, 3000);
});
document.addEventListener('DOMContentLoaded', function () {
    function setupRadioHandler(productSelector, radioName, imgPrefix, hoverClass) {
        const radioButton1 = document.querySelector(`input[name="${radioName}"]:first-of-type`);
        const radioButton2 = document.querySelector(`input[name="${radioName}"]:last-of-type`);
        const pictureElement = document.querySelector(`${productSelector} .picture`);

        function handleRadioChange() {
            const isChecked1 = radioButton1.checked;
            const isChecked2 = radioButton2.checked;

            if (isChecked1) {
                pictureElement.style.backgroundImage = `url('img/${imgPrefix}-1.png')`;
            } else if (isChecked2) {
                pictureElement.style.backgroundImage = `url('img/${imgPrefix}_1.png')`;
            }

            if (isChecked1 || isChecked2) {
                pictureElement.classList.add(hoverClass);
            } else {
                pictureElement.classList.remove(hoverClass);
            }
        }

        radioButton1.addEventListener('change', handleRadioChange);
        radioButton2.addEventListener('change', handleRadioChange);

        pictureElement.addEventListener('mouseenter', function () {
            pictureElement.classList.add(hoverClass);
        });

        pictureElement.addEventListener('mouseleave', function () {
            pictureElement.classList.remove(hoverClass);
        });
    }

    setupRadioHandler('.product1', 'p1', 'p1', 'hovered-p1');
    setupRadioHandler('.product2', 'p2', 'p2', 'hovered-p2');
    setupRadioHandler('.product3', 'p3', 'p3', 'hovered-p3');
    setupRadioHandler('.product4', 'p4', 'p4', 'hovered-p4');
});