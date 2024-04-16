jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());


    // --------------------------------------------------------------------
    // Owl Carousal
    // --------------------------------------------------------------------

    (function () {
        $("#review").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 2,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });
    }());


}); // JQuery end

function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    var menuIcon = document.querySelector('.menu-icon');
    menuItems.style.width = (menuItems.style.width === '0px' || menuItems.style.width === '') ? '70%' : '0px'; /* Largura desejada */
    // Adicionando/Removendo a classe 'x' para alterar o ícone
    menuIcon.classList.toggle('x', menuItems.style.width !== '0px');
}