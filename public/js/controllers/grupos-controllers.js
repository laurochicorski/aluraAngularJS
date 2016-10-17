/**
 * Created by lauro on 17/10/16.
 */
angular.module('alurapic').controller('GrupoController', function ($scope, $http) {
    $scope.grupos = [];

    $http.get('v1/grupos')
        .success(function (grupos) {
            $scope.grupos = grupos;
        })
        .error(function (error) {
            console.log(error);
        })
})