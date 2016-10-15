/**
 * Created by lauro on 15/10/16.
 */
angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        var ddo = {};

        ddo.restric = "AE";
        /*
         A = atribute
         E = element
         */

        ddo.scope = {
            titulo: '@' // = titulo: '@titulo'

        };
        // Transclude manter os elementos filhos da diretiva
        ddo.transclude = true;

        ddo.templateUrl = 'js/directives/meu-painel.html'
        return ddo;
    });
