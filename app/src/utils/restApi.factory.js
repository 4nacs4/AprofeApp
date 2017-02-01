(function() {
    'use strict';

    angular
            .module('app')
            .factory('restApi', restApi);

    /* @ngInject */
    function restApi($http, config) {

        var serverUrl = config.restApi.protocol + '://' + config.restApi.host + ':' + config.restApi.port + '/' + config.restApi.apiPath;
        var service = {
            gerAllUsersData: gerAllUsersData,
            getSingleExperience: getSingleExperience,
            getExperienceInviteList: getExperienceInviteList
        };

        return service;

        function getSingleExperience(experienceId) {
            return $http.get('datastore/singleExperience.json');
        }
        function gerAllUsersData() {
            return $http.get(serverUrl + '/userdata');
        }

        function getExperienceInviteList() {
            return $http.get('datastore/profiles.json');
        }




    }
}());
