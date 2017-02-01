(function(){
    'use strict';

    angular
        .module('app.shell')
        .controller('messageSubNavBar', messageSubNavBar);

    /* @ngInject */
    function messageSubNavBar(navigation, $state, $scope){
        var vm = this;
        vm.navStates = [];
        vm.title = '';
        init();
        /////////////////////
        function init(){
            vm.notification = 'noData';
            vm.hidetabs = $state.current.navHideStates || false;
            navigation.getUserSubNavNotification().then(function(res){
                vm.notification =  res.data;
                $state.get()
                    .forEach(function(state){
                        if(state.nav === 'subNavMessage'){
                            state.isActiveTab = false;
                            state.notification = vm.notification[state.subNavNotificationJsonName];
                            if(navigation.returnCurrentStateName().indexOf(state.name) !== -1){
                                state.isActiveTab = true;
                                vm.title = state.navTitle;
                            }
                            if(!state.navHideStates){
                                vm.navStates.push(state);
                            }

                        }
                    });
            });

        }
    }
}());