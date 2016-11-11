// Initialize your app
var sphereApp = new Framework7({
    //enable Material theme
    material: true,
    swipePanel: 'left',
    pushState: true,
    hideNavbarOnPageScroll: true,

    // Hide and show indicator during ajax requests
    onAjaxStart: function(xhr) {
        sphereApp.showIndicator();
    },
    onAjaxComplete: function(xhr) {
        sphereApp.hideIndicator();
    }
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = sphereApp.addView('.view-main', {});

//Setup slider
$$(document).on('pageInit', function(e) {
    var mySwiper = sphereApp.swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        parallax: true
    });
});

//Login screen
$$('.login-screen .button').on('click', function() {
    var username = $$('.login-screen input[name="username"]').val();
    var password = $$('.login-screen input[name="password"]').val();
    sphereApp.alert('Username: ' + username + ', Password: ' + password, function() {
        sphereApp.closeModal('.login-screen');
    });
});
