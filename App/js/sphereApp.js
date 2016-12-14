// ##################### Initialize app ##################### //
var sphereApp = new Framework7({

    // Enable Material theme //
    material: true,
    pushState: true,

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


// ##################### Page Specific JS ##################### //

// ----------Swiper slider ---------- //
sphereApp.onPageInit('pre-arrival introduction', function(page) {

    'use strict';

    // Setup slider //
    var mySwiper = sphereApp.swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        parallax: true
    });

});

// ---------- Random colour generator ---------- //
sphereApp.onPageInit('index-rows index-squares', function(page) {

    'use strict';

    // Random grid item colour from selection //
    $('.grid-item').each(function() {
        var colors = ['#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#29b6f6', '#26c6da', '#26a69a', '#66bb6a', '#9ccc65', '#d4e157', '#ffee58', '#ffca28', '#ffa726', '#ff7043', '#8d6e63', '#bdbdbd', '#78909c'];
        var rand = Math.floor(Math.random() * colors.length);
        $(this).css('background-color', colors[rand]);
    });

    /*
    // Random grid item colour from hue //
      $('.grid-item').each(function() {
          var hue = 'rgb(' + (Math.floor((150 - 255) * Math.random()) + 200) + ',' + (Math.floor((200 - 255) * Math.random()) + 200) + ',' + (Math.floor((200 - 255) * Math.random()) + 200) + ')';
          $(this).css('background-color', hue);
      });  */

});

// ---------- Virtual list (card page) ---------- //
sphereApp.onPageInit('index-scroll', function(page) {

    'use strict';

    var itemList = sphereApp.virtualList($$(page.container).find('.virtual-list'), {

        // Parameters //
        showFilteredItemsOnly: false,

        // Array with items data //
        items: [{
            // Card 0 //
            category: 'new-starter',
            picture: 'img/sections/new-starter-images/pre-arrival-header.jpg',
            title: 'Pre Arrival',
            subHeading: 'GET READY',
            description: 'Starting a new job can be a daunting experience. This section hopes to answer some of the questions you may have in anticipation of your first day in the office.',
            link: 'pre-arrival.html'
        }, {
            // Card 1 //
            category: 'new-starter',
            picture: 'img/sections/new-starter-images/first-day-header.jpg',
            title: 'First Day',
            subHeading: 'NEW BEGINNINGS',
            description: 'Its finally arrived; your first day in the office! This section aims to give you a heads up on what to expect for your first trip into the office.',
            link: 'first-day.html'
        }, {
            // Card 2 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/security.jpg',
            title: 'Security',
            subHeading: 'STAY SECURE',
            description: 'Keeping information safe and secure will help you carry out your job effectively. This includes all information in our care regardless of how it is stored or communicated. Security is your responsibility.',
            link: 'working-here/security.html'
        }, {
            // Card 3 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/flexi-time.jpg',
            title: 'Flexi Time',
            subHeading: 'STAY SECURE',
            description: 'An introduction to flexible working arrangements at the IPO. Improve your work / life balance by choosing when you want to be in the office.',
            link: 'working-here/flexi-time.html',
        }, {
            // Card 4 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/annual-leave.jpg',
            title: 'Annual Leave',
            subHeading: 'OUT OF OFFICE PROCEDURE',
            description: 'Find out about your office leave entitlement. This section includes; how many days off you can take and information about bank holidays.',
            link: 'working-here/annual-leave.html',
        }, {
            // Card 5 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/pay.jpg',
            title: 'Pay',
            subHeading: 'MONTHLY HIGHLIGHT',
            description: 'Everyone looks forward to payday! This section will give you some basic information about how the IPO pays its employees.',
            link: 'working-here/pay.html',
        }, {
            // Card 6 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/car-sharing.jpg',
            title: 'Car Sharing',
            subHeading: 'HELP THE ENVIRONMENT',
            description: 'Read about some of the rewards and benefits you could receive by taking part in the office car sharing scheme. Do your part for a greener future.',
            link: 'working-here/car-sharing.html',
        }, {
            // Card 7 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/discounts.jpg',
            title: 'Discounts',
            subHeading: 'SAVE MONEY',
            description: 'Learn more about some of the discounts and services that you have access to as a employee of the IPO and as a Civil Servant.',
            link: 'working-here/discounts.html',
        }, {
            // Card 8 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/tredegar-house.jpg',
            title: 'Tredegar House',
            subHeading: 'EXPLORE HISTORY',
            description: 'Pay a visit to our historic neighbour; Tredegar House. Learn more about its history or explore the grounds, all in your lunch break!',
            link: 'working-here/tredegar-house.html',
        }, {
            // Card 9 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/eye-care.jpg',
            title: 'Eye Care',
            subHeading: 'TWENTY TWENTY',
            description: 'Maintaining high quality vision is extremely important. Learn about some of the eye care services that you may have access to.',
            link: 'working-here/eye-care.html',
        }, {
            // Card 10 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/bps.jpg',
            title: 'Bike Purchase',
            subHeading: 'RIDE AWAY',
            description: 'Make the morning commute a bit more exciting! The bike purchase scheme is a great opportunity to help the environment and avoid the traffic.',
            link: 'working-here/bike-purchase-scheme.html',
        }, {
            // Card 11 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/benenden-healthcare.jpg',
            title: 'Benenden Healthcare',
            subHeading: 'SKIP THE QUEUES',
            description: 'Find out more about the IPO health care scheme. Benenden Healthcare provides an affordable alternative to private health care services.',
            link: 'working-here/benenden-healthcare.html',
        }, {
            // Card 12 //
            category: 'working-here',
            picture: 'img/sections/working-here-images/child-care.jpg',
            title: 'Child Care',
            subHeading: 'HELPING HAND',
            description: 'Child care can be extremely costly. The office offers a nursery and can help eligable staff with child care vouchers, to help displace some of the cost.',
            link: 'working-here/child-care.html',
        }, {
            // Card 13 //
            category: 'travel',
            picture: 'img/sections/travel-images/map.jpg',
            title: 'Map',
            subHeading: 'FIND YOUR WAY',
            description: 'Use our interactive map to learn more about the local area. Find the best transport routes, while learning to navigate like a local.',
            link: 'travel/map.html',
        }],

        // Custom search function for searchbar //
        searchAll: function(query, items) {
            var found = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].category.indexOf(query) >= 0 || query.trim() === '') found.push(i);
                if (items[i].title.indexOf(query) >= 0 || query.trim() === '') found.push(i);
                if (items[i].description.indexOf(query) >= 0 || query.trim() === '') found.push(i);
            }
            // Return array with mathced indexes //
            return found;
        },

        // Template to render each item //
        renderItem: function(index, item) {
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
        },

        // Height function (Fixes jumping scroll - needs to match CSS) //
        height: function(item) {
            if (item.picture) return 400;
        }

    });

    $$('#tab-all').on('click', function() {
        $('.tab-link').removeClass('active');
        $(this).addClass('active');
        itemList.resetFilter();
    });

    $$('#tab-newstarter').on('click', function() {
        $('.tab-link').removeClass('active');
        $(this).addClass('active');
        itemList.filterItems([0, 1]);
    });

    $$('#tab-workinghere').on('click', function() {
        $('.tab-link').removeClass('active');
        $(this).addClass('active');
        itemList.filterItems([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });

    $$('#tab-travel').on('click', function() {
        $('.tab-link').removeClass('active');
        $(this).addClass('active');
        itemList.filterItems([13]);
    });

    /*
$('#button-1').on('click', function() {

    });*/

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
