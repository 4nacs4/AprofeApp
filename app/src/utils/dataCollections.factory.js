(function() {
    'use strict';

    angular
            .module('app')
            .factory('dataCollections', dataCollections);

    /* @ngInject */
    function dataCollections($http) {
        var tipoCedulaCollection = [
            {"id": "V", "name": "V"},
            {"id": "E", "name": "E"},
            {"id": "J", "name": "J"},
            {"id": "G", "name": "G"}
        ];
        var estadoCivilCollection = [
            {"id": "S", "name": "Soltero(a)"},
            {"id": "C", "name": "Casado(a)"},
            {"id": "V", "name": "Viudo(a)"},
            {"id": "X", "name": "Concubino"}
        ];
        var ciudadCollection = [];
        var paisCollection = [
            {"id": "Venezuela", "name": "Venezuela"}
        ];
        var viviendaCollection = [
            {"id": "Propia", "name": "Propia"},
            {"id": "Alquilada", "name": "Alquilada"}
        ];
        var celularCollection = [
            {"id": "0416", "name": "0416"},
            {"id": "0426", "name": "0426"},
            {"id": "0412", "name": "0412"},
            {"id": "0414", "name": "0414"},
            {"id": "0424", "name": "0424"}
        ];
        var service = {
            getTipoCedulaCollection: getTipoCedulaCollection,
            getEstadoCivilCollection: getEstadoCivilCollection,
            getEstadoCollection: getEstadoCollection,
            getPaisCollection: getPaisCollection,
            getViviendaCollection: getViviendaCollection,
            getCelularCollection: getCelularCollection,
            getCiudadCollection: getCiudadCollection,
            setCiudadCollection: setCiudadCollection
        };

        return service;
        //getters
        function getTipoCedulaCollection() {
            return tipoCedulaCollection;
        }
        function getEstadoCivilCollection() {
            return estadoCivilCollection;
        }
        function getPaisCollection() {
            return paisCollection;
        }
        function getCiudadCollection() {
            return ciudadCollection;
        }
        function getEstadoCollection() {
            return $http.get('datastore/venezuela.json');
        }
        function getViviendaCollection() {
            return viviendaCollection;
        }
        function getCelularCollection() {
            return celularCollection;
        }
        
        //setters
        function setCiudadCollection(estado) {
            ciudadCollection = estado.ciudades;
            console.log(estado)
        }
    }
}());
