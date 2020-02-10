angular.module('demo', [])
.controller('Cadastro', function($scope, $http) {
    $http.get('http://localhost:5000/cadastro').
        then(function(response) {
            $scope.empresas = response.data;
        });
});
