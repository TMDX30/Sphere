// ##################### Initialize app ##################### //
var sphereApp = new Framework7({

    // Enable Material theme //
    material: true,
    pushState: true,
    upscroller: {
        text: 'Top'
    },

    // Hide and show loading indicator during ajax requests //
    onAjaxStart: function(xhr) {
        'use strict';
        sphereApp.showIndicator();
    },
    onAjaxComplete: function(xhr) {
        'use strict';
        sphereApp.hideIndicator();
    }

});

// Export selectors engine //
var $$ = Dom7;

// Add view //
var mainView = sphereApp.addView('.view-main');

// Setup Dynamic Cards //
sphereApp.onPageInit('index', function(page) {

    'use strict';

    var newStarterList = [{
        // Card 0 //
        category: 'new-starter',
        meta: 'introduction INTRODUCTION Introduction',
        picture: 'img/sections/new-starter-images/introduction-header.jpg',
        title: 'Introduction',
        subHeading: 'WELCOME',
        description: 'Start your journey with the IPO here. This section aims to get you up to speed the purpose of this app as well as some basic information about the office.',
        link: 'introduction.html'
    }, {
        // Card 1 //
        category: 'new-starter',
        meta: 'arrival ARRIVAL Arrival',
        picture: 'img/sections/new-starter-images/pre-arrival-header.jpg',
        title: 'Arrival',
        subHeading: 'GET READY',
        description: 'Starting a new job can be a daunting experience. This section hopes to answer some of the questions you may have in anticipation of your first day in the office.',
        link: 'arrival.html'
    }, {
        // Card 2 //
        category: 'new-starter',
        meta: 'first day(s) FIRST DAY(S) First Day(s)',
        picture: 'img/sections/new-starter-images/first-day-header.jpg',
        title: 'First Day(s)',
        subHeading: 'NEW BEGINNINGS',
        description: 'Its finally arrived; your first day in the office! This section aims to give you a heads up on what to expect for your first trip into the office.',
        link: 'first-day.html'
    }];

    var workingHereList = [{
        // Card 3 //
        category: 'working-here',
        meta: 'security SECURITY Security',
        picture: 'img/sections/working-here-images/security.jpg',
        title: 'Security',
        subHeading: 'STAY SECURE',
        description: 'Keeping information safe and secure will help you carry out your job effectively. Security should always be on your mind and is your responsibility.',
        link: 'working-here/security.html'
    }, {
        // Card 4 //
        category: 'working-here',
        meta: 'flexi time FLEXI TIME Flexi Time',
        picture: 'img/sections/working-here-images/flexi-time.jpg',
        title: 'Flexi Time',
        subHeading: 'STAY SECURE',
        description: 'An introduction to flexible working arrangements at the IPO. Improve your work / life balance by choosing when you want to be in the office.',
        link: 'working-here/flexi-time.html',
    }, {
        // Card 5 //
        category: 'working-here',
        meta: 'diversity DIVERSITY Diversity',
        picture: 'img/sections/working-here-images/diversity.jpg',
        title: 'Diversity',
        subHeading: 'EQUAILITY FIRST',
        description: 'You have the right to a working life free from discrimination, victimisation or harassment. Equality is about removing barriers.',
        link: 'working-here/diversity.html',
    }, {
        // Card 6 //
        category: 'working-here',
        meta: 'annual leave ANNUAL LEAVE Annual Leave',
        picture: 'img/sections/working-here-images/annual-leave.jpg',
        title: 'Annual Leave',
        subHeading: 'OUT OF OFFICE PROCEDURE',
        description: 'Find out about your office leave entitlement. This section includes; how many days off you can take and information about bank holidays.',
        link: 'working-here/annual-leave.html',
    }, {
        // Card 7 //
        category: 'working-here',
        meta: 'pay PAY Pay',
        picture: 'img/sections/working-here-images/pay.jpg',
        title: 'Pay',
        subHeading: 'MONTHLY HIGHLIGHT',
        description: 'Everyone looks forward to payday! This section will give you some basic information about how the IPO pays its employees.',
        link: 'working-here/pay.html',
    }, {
        // Card 8 //
        category: 'working-here',
        meta: 'car sharing CAR SHARING Car Sharing',
        picture: 'img/sections/working-here-images/car-sharing.jpg',
        title: 'Car Sharing',
        subHeading: 'HELP THE ENVIRONMENT',
        description: 'Read about some of the rewards and benefits you could receive by taking part in the office car sharing scheme. Do your part for a greener future.',
        link: 'working-here/car-sharing.html',
    }, {
        // Card 9 //
        category: 'working-here',
        meta: 'discounts DISCOUNTS Discounts',
        picture: 'img/sections/working-here-images/discounts.jpg',
        title: 'Discounts',
        subHeading: 'SAVE MONEY',
        description: 'Learn more about some of the discounts and services that you have access to as a employee of the IPO and as a Civil Servant.',
        link: 'working-here/discounts.html',
    }, {
        // Card 10 //
        category: 'working-here',
        meta: 'tredegar house TREDEGAR HOUSE Tredegar House',
        picture: 'img/sections/working-here-images/tredegar-house.jpg',
        title: 'Tredegar House',
        subHeading: 'EXPLORE HISTORY',
        description: 'Pay a visit to our historic neighbour; Tredegar House. Learn more about its history or explore the grounds, all in your lunch break!',
        link: 'working-here/tredegar-house.html',
    }, {
        // Card 11 //
        category: 'working-here',
        meta: 'eye care EYE CARE Eye Care',
        picture: 'img/sections/working-here-images/eye-care.jpg',
        title: 'Eye Care',
        subHeading: 'TWENTY TWENTY',
        description: 'Maintaining high quality vision is extremely important. Learn about some of the eye care services that you may have access to.',
        link: 'working-here/eye-care.html',
    }, {
        // Card 12 //
        category: 'working-here',
        meta: 'bike purchase BIKE PURCHASE Bike Purchase',
        picture: 'img/sections/working-here-images/bps.jpg',
        title: 'Bike Purchase',
        subHeading: 'RIDE AWAY',
        description: 'Make the morning commute a bit more exciting! The bike purchase scheme is a great opportunity to help the environment and avoid the traffic.',
        link: 'working-here/bike-purchase-scheme.html',
    }, {
        // Card 13 //
        category: 'working-here',
        meta: 'benenden healthcare BENENDEN HEALTHCARE Benenden Healthcare',
        picture: 'img/sections/working-here-images/benenden-healthcare.jpg',
        title: 'Benenden Healthcare',
        subHeading: 'SKIP THE QUEUES',
        description: 'Find out more about the IPO health care scheme. Benenden Healthcare provides an affordable alternative to private health care services.',
        link: 'working-here/benenden-healthcare.html',
    }, {
        // Card 14 //
        category: 'working-here',
        meta: 'child care CHILD CARE Child Care',
        picture: 'img/sections/working-here-images/child-care.jpg',
        title: 'Child Care',
        subHeading: 'HELPING HAND',
        description: 'Child care can be extremely costly. The office offers a nursery and can help eligable staff with child care vouchers, to help displace some of the cost.',
        link: 'working-here/child-care.html',
    }];

    var travelList = [{
        // Card 15 //
        category: 'travel',
        meta: 'map MAP Map',
        picture: 'img/sections/travel-images/map.jpg',
        title: 'Map',
        subHeading: 'FIND YOUR WAY',
        description: 'Use our interactive map to learn more about the local area. Find the best transport routes, while learning to navigate like a local.',
        link: 'travel/map.html',
    }, {
        // Card 16 //
        category: 'travel',
        meta: 'by car and motorbike BY CAR AND MOTORBIKE & By Car & Motorbike',
        picture: 'img/sections/travel-images/car-motorbike.jpg',
        title: 'By Car & Motorbike',
        subHeading: 'ADVICE FOR MOTORISTS',
        description: 'Find the best routes into the office and where to park once you arrive. Unfortunately we can not guarantee you a stress free trip.',
        link: 'travel/car-motorbike.html',
    }, {
        // Card 17 //
        category: 'travel',
        meta: 'by public transport BY PUBLIC TRANSPORT By Public Transport',
        picture: 'img/sections/travel-images/public-transport.jpg',
        title: 'By Public Transport',
        subHeading: 'THE COMMUTE',
        description: 'Learn about local public transport routes in and out of the office. This section covers getting to the office by bus, train or on foot.',
        link: 'travel/public-transport.html',
    }, {
        // Card 18 //
        category: 'travel',
        meta: 'by bike BY BIKE By Bike',
        picture: 'img/sections/travel-images/bike.jpg',
        title: 'By Bike',
        subHeading: 'EARLY MORNING RACE',
        description: 'Information about the cyclist friendly facilities and benefits that the IPO has to offer. Two wheels are better than four!',
        link: 'travel/bike.html',
    }];

    var socialList = [{
            // Card 19 //
            category: 'social',
            meta: 'sports day SPORTS DAY Sports Day',
            picture: 'img/sections/social-images/sports-day.jpg',
            title: 'Sports Day',
            subHeading: 'GET ACTIVE',
            description: 'This yearly event is an opportunity to get involved in some fun team sporting activities. Represent the IPO in your chosen discipline.',
            link: 'social/sports-day.html',
        }, {
            // Card 20 //
            category: 'social',
            meta: 'cssc and minerva CSSC AND MINERVA & CSSC And Minerva',
            picture: 'img/sections/social-images/cssc.jpg',
            title: 'CSSC & Minerva',
            subHeading: 'GET INVOLVED',
            description: 'An introduction to the Civil Service Sports Council (CSSC) & Minerva. Learn how to sign up and about some of the benefits that a membership would provide.',
            link: 'social/cssc.html',
        },
        {
            // Card 21 //
            category: 'social',
            meta: 'clubs and societies CLUBS AND SOCIETIES & Clubs And Societies',
            picture: 'img/sections/social-images/clubs-societies.jpg',
            title: 'Clubs & Societies',
            subHeading: 'SOMETHING DIFFERENT',
            description: 'An introduction to the Civil Service Sports Council (CSSC) & Minerva. Learn how to sign up and about some of the benefits that a membership would provide.',
            link: 'social/clubs-societies.html',
        },
    ];

    var facilitiesList = [{
            // Card 22 //
            category: 'facilities',
            meta: 'gym GYM Gym',
            picture: 'img/sections/facilities-images/gym.jpg',
            title: 'Gym',
            subHeading: 'GET IN SHAPE',
            description: 'Time to get motivated and join the gym. Learn more about the IPO fitness suite and what you neeed to do to join. Lift some Iron or get running.',
            link: 'facilities/gym.html',
        },
        {
            // Card 23 //
            category: 'facilities',
            meta: 'parking PARKING Parking',
            picture: 'img/sections/facilities-images/parking.jpg',
            title: 'Parking',
            subHeading: 'FIND THE BEST SPOT',
            description: 'Parking can always be troublesome. Get up to speed (no pun intended) on IPO parking policies. Learn about the busiest times, and where best to park.',
            link: 'facilities/parking.html',
        },
        {
            // Card 24 //
            category: 'facilities',
            meta: 'disability access DISABILITY ACCESS Disability Access',
            picture: 'img/sections/facilities-images/disability-access.jpg',
            title: 'Disability Access',
            subHeading: 'ACCESIBLE FOR ALL',
            description: 'We aim to make the office accessible to all people. Our facilities should be able to cater to your needs as an employee.',
            link: 'facilities/disability-access.html',
        },
        {
            // Card 25 //
            category: 'facilities',
            meta: 'coffee COFFEE Coffee',
            picture: 'img/sections/facilities-images/coffee.jpg',
            title: 'Coffee',
            subHeading: 'CAFFEINE BOOST',
            description: 'Information about the onsite coffee shop. If you need to recharge your batteries or just want a more informal meeting environment, this is perfect place to be.',
            link: 'facilities/coffee.html',
        },
        {
            // Card 26 //
            category: 'facilities',
            meta: 'canteen and shop CANTEEN AND SHOP & Canteen And Shop',
            picture: 'img/sections/facilities-images/canteen-shop.jpg',
            title: 'Canteen & Shop',
            subHeading: 'LUNCH TIME',
            description: 'Some say that this is the best part of the day. Find out more about the shared IPO / ONS canteen. Information includes opening and closing times.',
            link: 'facilities/canteen-shop.html',
        },
        {
            // Card 27 //
            category: 'facilities',
            meta: 'wellbeing suite WELLBEING SUITE Wellbeing Suite',
            picture: 'img/sections/facilities-images/wellbeing-suite.jpg',
            title: 'Wellbeing Suite',
            subHeading: 'SIT BACK AND RELAX',
            description: 'Perfect for relaxing mid-day or for clearing your head after a heavy meeting. Learn more about what the Wellbeing Suite can offer you.',
            link: 'facilities/wellbeing-suite.html',
        },
        {
            // Card 28 //
            category: 'facilities',
            meta: 'wi-fi WI-FI Wi-Fi',
            picture: 'img/sections/facilities-images/wifi.jpg',
            title: 'Wi-Fi',
            subHeading: 'GET CONNECTED',
            description: 'Find out how to get setup with the IPO staff Wi-Fi service. Learn how to stay safe online and about some general advice for usage.',
            link: 'facilities/wifi.html',
        },
        {
            // Card 29 //
            category: 'facilities',
            meta: 'desk DESK Desk',
            picture: 'img/sections/facilities-images/desk.jpg',
            title: 'Desk',
            subHeading: 'TIME TO GET TO WORK',
            description: 'A staple of the office. Theres not much to say about the humble desk, but if you are curious, we can tell you what you can expect to find at your work station.',
            link: 'facilities/desk.html',
        },
        {
            // Card 30 //
            category: 'facilities',
            meta: 'tea points TEA POINTS Tea Points',
            picture: 'img/sections/facilities-images/tea-points.jpg',
            title: 'Tea Points',
            subHeading: 'A NATIONAL PASTIME',
            description: 'Find out more about what your local tea stop can offer you. This will likely become a frequent haunt. Also included; advice about appropriate usage.',
            link: 'facilities/tea-points.html',
        },
        {
            // Card 31 //
            category: 'facilities',
            meta: 'atm and train tickets ATM AND TRAIN TICKETS & Atm And Train Tickets',
            picture: 'img/sections/facilities-images/atm-tickets.jpg',
            title: 'ATM & Train Tickets',
            subHeading: 'BEEP BOOP',
            description: 'The IPO offers both an ATM and dedicated train ticket collection machine. We hope that they provide an extra level of convenience.',
            link: 'facilities/atm-tickets.html',
        },
        {
            // Card 32 //
            category: 'facilities',
            meta: 'showers SHOWERS Showers',
            picture: 'img/sections/facilities-images/showers.jpg',
            title: 'Showers',
            subHeading: 'RAIN DROPS KEEP FALLING',
            description: 'Particularly useful information if you join the IPO gym or decide to take a sporty commute to work. Dont forget to bring a towel!',
            link: 'facilities/showers.html',
        },
        {
            // Card 33 //
            category: 'facilities',
            meta: 'lockers LOCKERS Lockers',
            picture: 'img/sections/facilities-images/lockers.jpg',
            title: 'Lockers',
            subHeading: 'FORT KNOX',
            description: 'Lockers are great for when you want to make use of the gym or the showers. Please dont use them as a lockbox substitute though.',
            link: 'facilities/lockers.html',
        },
        {
            // Card 34 //
            category: 'facilities',
            meta: 'hairdressers HAIRDRESSERS Hairdressers',
            picture: 'img/sections/facilities-images/hairdressers.jpg',
            title: 'Hairdressers',
            subHeading: 'QUICK CUT',
            description: 'Have a quick trim, or change your style completely. Leave the office looking like a new person with the on site hairdressing service.',
            link: 'facilities/hairdressers.html',
        }
    ];

    // Create and populate card HTML template //
    function cardTemplate(index, item) {
        return '<li class="card content-card card-header-image">' +
            '<div style="background-image:url(' + item.picture + ')" valign="bottom" class="card-header color-white no-border">' +
            '<span class="card-image-text">' + item.title + '</span>' +
            '</div>' +
            '<div class="card-content">' +
            '<div class="card-content-inner">' +
            '<h3 class="card-description-heading">' + item.subHeading + '</h3>' +
            '<p class="card-description">' + item.description + '</p>' +
            '</div>' +
            '</div>' +
            '<div class="card-footer">' +
            '<a></a>' +
            '<a href="' + item.link + '" class="link">Read more</a>' +
            '</div>' +
            '</li>';
    }

    // Set card height function //
    function cardHeight(item) {
        return 400;
    }

    // Concatinate all items into one array  //
    var allItems = newStarterList.concat(workingHereList, travelList, socialList, facilitiesList);

    var allTab = sphereApp.virtualList('.virtual-list-all', {

        // Array with items data //
        items: allItems,

        // Custom search function for searchbar //
        searchAll: function(query, allItems) {
            var foundAll = [];
            for (var i = 0; i < allItems.length; i++) {
                if (allItems[i].meta.indexOf(query.trim()) >= 0) foundAll.push(i);
            }
            return foundAll; //return array with mathced indexes
        },

        // Template to render each item //
        renderItem: cardTemplate,

        // Card height (Fixes jumping scroll - needs to match CSS) //
        height: cardHeight,

    });

    var newStarterTab = sphereApp.virtualList('.virtual-list-newstarter', {

        // Array with items data //
        items: newStarterList,

        // Template to render each item //
        renderItem: cardTemplate,

        // Card height (Fixes jumping scroll - needs to match CSS) //
        height: cardHeight,

    });

    var workingHereTab = sphereApp.virtualList('.virtual-list-workinghere', {

        // Array with items data //
        items: workingHereList,

        // Template to render each item //
        renderItem: cardTemplate,

        // Card height (Fixes jumping scroll - needs to match CSS) //
        height: cardHeight,

    });

    var travelTab = sphereApp.virtualList('.virtual-list-travel', {

        // Array with items data //
        items: travelList,

        // Template to render each item //
        renderItem: cardTemplate,

        // Card height  (Fixes jumping scroll - needs to match CSS) //
        height: cardHeight,

    });

    var socialTab = sphereApp.virtualList('.virtual-list-social', {

        // Array with items data //
        items: socialList,

        // Template to render each item //
        renderItem: cardTemplate,

        // Card height  (Fixes jumping scroll - needs to match CSS) //
        height: cardHeight,

    });

    var facilitiesTab = sphereApp.virtualList('.virtual-list-facilities', {

        // Array with items data //
        items: facilitiesList,

        // Template to render each item //
        renderItem: cardTemplate,

        // Card height  (Fixes jumping scroll - needs to match CSS) //
        height: cardHeight,

    });
}).trigger();

// ##################### Page Specific JS ##################### //

// ----------Swiper slider ---------- //
sphereApp.onPageInit('introduction', function(page) {

    'use strict';

    // Setup slider //
    var mySwiper = sphereApp.swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        parallax: true
    });

});

// ----------Scroll Up On Search ---------- //
$$('.searchbar-input').focusin(function() {
    'use strict';
    $('.page-header-image-large').animate({
            'height': '0',
            'opacity': '0'
        },
        /* Animation parameters */
        {
            duration: 300,
            easing: 'swing',
        }
    );
    $$('.searchbar').css('margin-top', '10px');
    $$('.page-content').scrollTop(0);
});

$$('.searchbar-input').focusout(function() {
    'use strict';
    $('.page-header-image-large').animate({
            'height': '70vw',
            'opacity': '1'
        },
        /* Animation parameters */
        {
            duration: 0,
            easing: 'linear',
        }
    );
    $$('.searchbar').css('margin-top', '0');
    $$('.page-content').scrollTop($$('.searchbar').offset().top - 114, 0);
});

// ----------Scroll Up On New Tab---------- //
$$('.tab-link').on('click', function() {
    'use strict';
    $$('.page-content').scrollTop(0);
});

// ----------Show Home Tab---------- //
$$('.home-link').on('click', function() {
    'use strict';
    sphereApp.showTab('#tab-all');
});

$$('.searchbar-input input').keyup(function(event) {
    'use strict';
    if (event.which === 13) {
        $$(this).blur();
    }
});

// ##################### Global JS ##################### //
$$(document).on('pageInit', function(e) {

    'use strict';

    // ---------- Login screen ---------- //
    $$('.login-screen .button').on('click', function() {
        var username = $$('.login-screen input[name="username"]').val();
        var password = $$('.login-screen input[name="password"]').val();
        sphereApp.alert('Username: ' + username + ', Password: ' + password, function() {
            sphereApp.closeModal('.login-screen');
        });
    });

});
