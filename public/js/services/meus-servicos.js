/**
 * Created by lauro on 17/10/16.
 */
angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', function ($resource) {
        return $resource('v1/fotos/:fotoId', null, {
            update : {
                method: 'PUT'
            }
        });
    })