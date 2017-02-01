(function() {
    'use strict';

    angular
            .module('app')
            .factory('config', config);

    /* @ngInject */
    function config() {
        var restApi = {
            protocol: 'http',
            port: '3000',
            host: 'localhost',
            apiPath: 'api'
        };
        var service = {
            restApi : restApi
        };
        return service;

    }
}());
