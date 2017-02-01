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
    function registerUser($scope, registerUser, $stateParams, $location, allFilters, dataCollections, restApi) {
        //vars
        var vm = this;
        vm.altScreen = false;
        vm.tipoCedulaCollection = dataCollections.getTipoCedulaCollection();
        vm.estadoCivilCollection = dataCollections.getEstadoCivilCollection();
        vm.paisCollection = dataCollections.getPaisCollection();
        vm.celularCollection = dataCollections.getCelularCollection();
        vm.viviendaCollection = dataCollections.getViviendaCollection();
        vm.ciudadCollection = dataCollections.getCiudadCollection();
        vm.subjects = allFilters[4];
        dataCollections.getEstadoCollection().then(function(res, err) {
            vm.estadoCollection = res.data
        });
        
        restApi.gerAllUsersData().then(function(res, err) {
            console.log(res.data)
        });
        
        
        vm.pais = vm.paisCollection[0];

        //functions
        vm.setCiudad = setCiudad;




        vm.selectedSubject = '';
        vm.studentNumber = allFilters[3];
        vm.selectedStudentNumber = '';
        vm.options = {
            height: 150,
            toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']]
            ]
        };
        vm.status = {
            allValues: [
                {
                    'id': 1,
                    'name': 'Active'
                },
                {
                    'id': 2,
                    'name': 'Pending'
                }
            ]
        };
        //Age Slider
        vm.ages = "10-25";
        vm.ages = vm.ages.replace('-', ';');
        vm.ageGroupOptions = {
            from: 3,
            to: 50,
            floor: true,
            step: 1,
            vertical: false,
            callback: function(value, elt) {
            }
        };

        // End Age Slider

        //start choose background multi image crousel

        var first = [];
        var second;
        var totalItem = 3;  //items per crousel

        vm.slides = [{
                image: 'http://lorempixel.com/60/60/people/1'

            }, {
                image: 'http://lorempixel.com/60/60/people/2'

            }, {
                image: 'http://lorempixel.com/60/60/people/3'

            }, {
                image: 'http://lorempixel.com/60/60/people/4'

            }, {
                image: 'http://lorempixel.com/60/60/people/5'

            }];


        for (var i = 0; i < vm.slides.length; i += totalItem) {
            second = {
                image1: vm.slides[i]
            };

            if (vm.slides[i + 1]) {
                second.image2 = vm.slides[i + 1];
            }
            if (vm.slides[i + (totalItem - 1)] && totalItem === 3) {
                second.image3 = vm.slides[i + 2];
            }
            first.push(second);
        }
        vm.groupedSlides = first;

        //End choose background multi image crousel

        //start drop down Menus


        //end drop down menus

        //start Word Counter
        // TODO: This should be directive rather than a method in controller.
        vm.countOf = function(text) {
            var maxWords = 100;
            var s = text ? text.split(/\s+/) : ''; // it splits the text on space/tab/enter
            return s ? maxWords - s.length : '100';
        };

        vm.countCharOf = function(text) {
            var maxChar = 100;
            var sChar = text ? text : '';
            return sChar ? maxChar - sChar.length : '100';
        };
        //start image cropper

        //vm.myImage = '';
        //vm.myCroppedImage = '';
        //

        //
        //vm.handleFileSelect = function (evt) {
        //  var file = evt.currentTarget.files[0];
        //  var reader = new FileReader();
        //  reader.onload = function (evt) {
        //    $scope.$apply(function ($scope) {
        //      vm.myImage = evt.target.result;
        //    });
        //  };
        //  vm.altScreen = true;
        //  reader.readAsDataURL(file);
        //};

        vm.cropper = {};
        vm.cropper.sourceImage = null;
        vm.cropper.croppedImage = null;
        vm.bounds = {};
        vm.bounds.left = 0;
        vm.bounds.right = 0;
        vm.bounds.top = 0;
        vm.bounds.bottom = 0;

        $scope.$watch(function() {
            if (vm.cropper.sourceImage !== null) {
                vm.altScreen = true;
            }
        });

        vm.cropImage = function() {
            vm.cropper.sourceImage = vm.cropper.croppedImage;
        };
        //$scope.$watch("vm.cropper.croppedImage", function(newValue, oldValue){
        //  if(newValue !== oldValue){
        //    vm.cropper.sourceImage = vm.cropper.croppedImage;
        //  }
        //});

        //End Image Cropper

        //start Date Picker

        vm.today = function() {
            vm.startdt = vm.enddt = new Date();
        };

        vm.clear = function() {
            vm.startdt = vm.enddt = null;
        };

        vm.startOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.startOpened = true;
        };

        vm.endOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.endOpened = true;
        };
        vm.format = 'dd-MMMM-yyyy';

        function init() {
            if (typeof $stateParams.id !== 'undefined') {

                registerUser.getExperiences($stateParams.id).then(function(res) {
                    vm.experience = res.data.experiences[0];
                    vm.name = res.data.experiences[0].name;
                    vm.expText = res.data.experiences[0].description;
                    vm.myText = res.data.experiences[0].description;
                    vm.invites = res.data.experiences[0].invites;
                });
            }
            vm.today();
        }
        function setCiudad(estado) {
            dataCollections.setCiudadCollection(estado);
            vm.ciudadCollection = dataCollections.getCiudadCollection();
            vm.ciudad = vm.ciudadCollection[0];
        }

        init();
    }
})();
