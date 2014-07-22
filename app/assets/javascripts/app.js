app = angular.module('Baboy', ['controller', 'directives', 'filters', 'services', 'ui.bootstrap', 'ngRoute']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.

      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'ContaCtrl'
      }).

      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'ContaCtrl'
      }).

      when('/movimentacoes', {
        templateUrl: 'partials/movimentacoes.html',
        controller: 'MovimentacoesCtrl'
      }).

      otherwise({
        redirectTo: '/movimentacoes'
      });
  }]);