(function(){
    'use strict';

    angular
        .module('app.modals')
        .factory('navigation', navigation);

    /* @ngInject */
    function navigation($state, $http){
        var isMarketingBannerVisible = ($state.$current.url.source === '/connections');
        var experienceDrawer = {
            pageType: '',
            expId: ''
        };
        var userDp = 'http://static.comicvine.com/uploads/original/11118/111181237/3995061-avatar_dc75_batman.jpg';
        function getMarketingBannerStatus(){
            return isMarketingBannerVisible && ($state.$current.url.source === '/connections');
        }
        function hideMarketingBannner(config){
            isMarketingBannerVisible = false;
        }
        function returnCurrentStateName(){
            return $state.$current.name;
        }
        function markIsVisited(){
            $state.$current.isVisited = true;
        }
        function getUserSubNavNotification(){
            return $http.get('datastore/messageSubNavBar.json');
        }
        function setExpDrawerNavigation(pageType, expId){
            experienceDrawer.pageType = pageType;
            experienceDrawer.expId = expId;
        }

        function getExpDrawerNavigation(){
            return experienceDrawer;
        }

        function getUserDp(){
            return userDp;
        }

        function setUserDp(Dp){
            userDp = Dp;
        }

        var service = {
            isMarketingBannerVisible: isMarketingBannerVisible,
            hideMarketingBannner: hideMarketingBannner,
            getMarketingBannerStatus: getMarketingBannerStatus,
            returnCurrentStateName: returnCurrentStateName,
            markIsVisited: markIsVisited,
            getUserSubNavNotification: getUserSubNavNotification,
            setExpDrawerNavigation: setExpDrawerNavigation,
            getExpDrawerNavigation: getExpDrawerNavigation,
            getUserDp: getUserDp,
            setUserDp: setUserDp
        };
        return service;
    }
}());
