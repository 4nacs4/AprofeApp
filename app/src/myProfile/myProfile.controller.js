/**
 * @ngdoc controller
 * @module app.myProfile
 * @name myProfile
 * @description Controller for my profile Info
 */
(function (){
    
  'use strict';

    angular
        .module('app.myProfile')
        .controller('myProfile', myProfile);

    /* @ngInject */
    function myProfile(navigation, $state, profileInfo, cmFilters){
        var vm = this;
        init();
        function init (){
            vm.profile = navigation.getUserDp();
            vm.isBannerVisible = navigation.getMarketingBannerStatus;
            vm.editProfile = editProfile;
            vm.languages = cmFilters.getFilterStringForm(vm.profile.languages);
            vm.subjects = cmFilters.getFilterStringForm(vm.profile.subjects);
        }
        function editProfile(){
            $state.go('shell.myProfile.view.edit', {
                profile: vm.profile
            });
        }
    }
})();
