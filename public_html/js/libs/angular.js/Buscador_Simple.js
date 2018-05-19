/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("buscadorAppSimple", []);

app.controller("buscadorControllerSimple", function buscadorControllerSimple($scope, $http) {
$http({
    method : "GET", 
    url : "http://bcstest.mybluemix.net/bcstest/rest/indices/consultaIndices?&periodo=DI&f_desde=2013-01-01&f_hasta=2014-01-01"
}).then(function mySuccess(response) {
      $scope.myData = response.data;
    }, function myError(response) {
      $scope.myData = response.status;
  });
});