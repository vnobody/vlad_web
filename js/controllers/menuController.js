app.controller("menuController", function ($scope) {
    $scope.logo = {
        src: 'img/kringel_logo_transparent.png',
        alt: 'Logo',
        link: 'home'
    };
    $scope.buttons = {
        homeButton: {
            id: 'home',
            label: 'Avaleht',
            link: 'home'
        },
        galleryButton: {
            id: 'gallery',
            label: 'Gallerii',
            link: 'gallery'
        },
        pricesButton: {
            isDropdown: true,
            id: 'prices',
            label: 'Hinnakiri',
            link: 'prices',
            types: [
                'Pirukad',
                'Saiakesed',
                'Kringlid',
                'Plaadikoogid',
                'Küpsised'
            ]
        },
        partnersButton: {
            id: 'partners',
            label: 'Partnerid',
            link: 'partners'
        },
        contactButton: {
            id: 'contact',
            label: 'Kontakt',
            link: 'contact'
        }
    };
});