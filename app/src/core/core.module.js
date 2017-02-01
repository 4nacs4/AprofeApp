(function() {

    'use strict';

    angular.module('app.core', [
        'ui.router',
        'ngMessages',
        'ngAnimate',
        'ui.select',
        'ngSanitize',
        'ngScrollbars',
        'angularAwesomeSlider',
        'summernote',
        'angular-img-cropper',
        'ngTagsInput',
        'satellizer'
    ]);

    angular.module('app.core').config(function(uiSelectConfig) {
        uiSelectConfig.theme = 'selectize';
        uiSelectConfig.appendToBody = true;
    });
    angular.module('app.core').config(function(ScrollBarsProvider) {
        ScrollBarsProvider.defaults = {
            scrollButtons: {
                scrollAmount: 'auto', // scroll amount when button pressed
                enable: true // enable scrolling buttons by default
            },
            scrollInertia: 400, // adjust however you want
            axis: 'y', // enable 2 axis scrollbars by default,
            theme: 'minimal-dark',
            autoHideScrollbar: true
        };
    });
    angular.module('app.core').config(function($authProvider) {
        $authProvider.loginUrl = "http://localhost/auth/signin";
        $authProvider.signupUrl = "http://localhost/auth/signup";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "myAprofeApp";
    });

}());
