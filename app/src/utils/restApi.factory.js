(function() {
    'use strict';

    angular
            .module('app')
            .factory('restApi', restApi);

    /* @ngInject */
    function restApi($http) {

        var serverUrl = config.restApi.protocol + '://' + config.restApi.host + ':' + config.restApi.port + '/' + config.restApi.apiPath;
        var service = {
            getSingleExperience: getSingleExperience,
            getExperienceInviteList: getExperienceInviteList,
            getUserProfile: getUserProfile
        };

        return service;

        function getSingleExperience(experienceId) {
            return $http.get('datastore/singleExperience.json');
        }
        function getUserProfile(id) {
            return $http.get(serverUrl + '/profile/' + id);
        }

        function getExperienceInviteList() {
            return $http.get('datastore/profiles.json');
        }




    }
}());
