/**
 * @ngdoc controller
 * @module app.shell
 * @name TopNavBar
 * @description Controller for the top navigation bar in the application
 */

(function(){
  'use strict';

  angular
    .module('app.shell')
    .controller('TopNavBar', TopNavBar);

  /* @ngInject */
  function TopNavBar(auth, $state, navigation){
    var vm = this;

    vm.login = login;
    vm.navStates = [];
    vm.isBannerVisible = navigation.getMarketingBannerStatus;
    init();

    /////////////////////

    /**
     * @ngdoc method
     * @name init
     * @description init function call, sets the navigational states array
     */

    function init(){
      $state.get()
        .forEach(function(state){
          if(state.nav === 'top'){
           vm.navStates.push(state);
          }
        });
    }

    /**
     * @ngdoc method
     * @name login
     * @description Opens the login modal
     */

    function login(){
      auth.login()
        .then(function(reason){

        }, function(reason){

        });
    }
  }
}());
