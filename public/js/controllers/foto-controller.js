/**
 * Created by lauro on 15/10/16.
 */
angular.module('alurapic').controller('FotoController', function ($scope, $http, cadastroDeFotos, recursoFoto, $routeParams) {
   $scope.foto = {};
   $scope.mensagem = '';


    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId)
            .success(function (foto) {
                $scope.foto = foto;
                console.log($scope.foto);
            })
            .error(function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto';
            })
    }

   $scope.submeter = function () {
       if($scope.formulario.$valid){
          cadastroDeFotos.cadastrar($scope.foto)
              .then(function (dados) {
                  $scope.mensagem = dados.mensagem;
                  if(dados.inclusao) $scope.foto = {}
              })
              .catch(function (dados) {
                  $scope.mensagem = dados.mensagem;
              })
       }
   };


});
