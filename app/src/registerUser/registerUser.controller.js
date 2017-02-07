/**
 * @ngdoc controller
 * @module app.registerUser
 * @name registerUser
 * @description Controller for the register Users
 */

(function() {
    'use strict';

    angular
            .module('app.registerUser')
            .controller('registerUser', registerUser);

    /* @ngInject */
    function registerUser($scope, registerUser, $stateParams, $location, allFilters, dataCollections, restApi, navigation) {
        //vars
        var vm = this;

        vm.idTypeCollection = dataCollections.getIdTypeCollection();
        vm.civilStatusCollection = dataCollections.getCivilStatusCollection();
        vm.countryCollection = dataCollections.getCountryCollection();
        vm.cellphoneTypeCollection = dataCollections.getCellphoneTypeCollection();
        vm.houseTypeCollection = dataCollections.getHouseTypeCollection();
        vm.cityCollection = dataCollections.getCityCollection();

        dataCollections.getStateCollection().then(function(res, err) {
            vm.stateCollection = res.data
        });

        vm.user = {
            _id: '',
            firstName: '',
            displayName: '',
            lastName: '',
            dob: '',
            civilStatus: '',
            weight: '',
            height: '',
            email: '',
            cellphone:'',
            phone: '',
            location: {
                address1: '',
                address2: '',
                country: '',
                state: '',
                city: '',
                zip: '',
                houseType: '',
            },
            bussiness: {
                profession: '',
                job: '',
                company: '',
                salary: ''
            },
            extraData: {
                car: {
                    mark: '',
                    model: '',
                    year: ''
                }
            },
            membership: {
                referred: {
                    id: '',
                    personType: ''
                },
                pay: {
                    date: '',
                    transferId: '',
                    bankName: '',
                    amount: ''
                },
            },
        };

        vm.country = vm.countryCollection[0];
        vm.referredIdType = vm.idTypeCollection[0];
        vm.referredNumberId = '';
        vm.format = 'dd-MMMM-yyyy';

        //functions
        vm.setCity = setCity;
        vm.createMembership = createMembership;
        vm.saveProfile = saveProfile;
        vm.loadSelectList = loadSelectList;
        vm.setListValues = setListValues;

        vm.dobToday = function() {
            vm.user.dob = new Date();
        };

        vm.dobClear = function() {
            vm.user.dob = null;
        };

        vm.payToday = function() {
            vm.user.membership.pay.date = new Date();
        };

        vm.payClear = function() {
            vm.user.membership.pay.date = null;
        };

        vm.dobOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.dobOpened = true;
        };

        vm.payOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.payOpen = true;
        };


        function init() {
            vm.user = _.merge(vm.user, _.pick(navigation.getUserDp(), _.keys(vm.user)))
            vm.user.userId = vm.user._id;
            delete vm.user._id;
            vm.loadSelectList();
        }
        function loadSelectList() {

        }
        function setListValues() {
            vm.user.civilStatus = vm.civilStatus.id;
            vm.user.location.country = vm.country.id;
            vm.user.location.state = vm.state.estado;
            vm.user.location.city = vm.city;
            vm.user.location.houseType = vm.houseType.id;
            vm.user.membership.referred.personType = vm.referredIdType.id;
            vm.user.cellphone = vm.cellphoneType.id + '-' + vm.cellphoneNumber;
            vm.user.phone = vm.phoneType + '-' + vm.phoneNumber;
            vm.user.membership.referred.id = vm.referredIdType.id + '-' + vm.referredNumberId;
        }
        function setCity(state) {
            dataCollections.setCityCollection(state);
            vm.cityCollection = dataCollections.getCityCollection();
            vm.city = vm.cityCollection[0];
        }
        function createMembership() {
            vm.setListValues();
            restApi.updateUserProfile(vm.user)
            .then(function(res) {
                console.log(res)
            })
            . catch (function(err) {
                 console.log(err)
            });
        }
        function saveProfile(state) {

        }
        init();
    }
})();
