/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var module = angular.module("buscadorApp", []);

module.controller("buscadorController", function buscadorController($scope, $http) {
    $scope.ingresar_datos = function () {
        var url_ = 'http://bcstest.mybluemix.net/bcstest/rest/indices/consultaIndices?';
        if ($scope.f_hasta <= $scope.f_desde || $scope.periodo === undefined || $scope.f_desde === undefined || $scope.f_hasta === undefined) {
            alert("La fecha de fin es menor a la inicial o faltan datos.");
        } else if ($scope.indice === undefined) {
            url_ += '&periodo=' + $scope.periodo + '&f_desde=' + $scope.f_desde + '&f_hasta=' + $scope.f_hasta;
            alert(url_);
            $scope.url_1 = url_;
            $http.get(url_).then(function mySuccess(response) {
                alert("Hubo respuesta del servidor.");
                $scope.respuesta = response.data;
            }, function myError(response) {
                alert("No hubo respuesta del servidor.");
                $scope.respuesta = response.statusText;
            });
        } else {
            url_ += 'indice=' + $scope.indice + '&periodo=' + $scope.periodo +
                    '&f_desde=' + $scope.f_desde + '&f_hasta=' + $scope.f_hasta;
            alert(url_);
            $scope.url_1 = url_;
            $http.get(url_).then(function mySuccess(response) {
                alert("Hubo respuesta del servidor.");
                $scope.respuesta = response.data;
            }, function myError(response) {
                alert("No hubo respuesta del servidor.");
                $scope.respuesta = response.statusText;
            });
        }

    };

});