app = angular.module('directives', []);

app.directive('contaDetalhes', [function () {
	return {
		restrict: 'E',
		templateUrl: 'partials/conta-detalhe.html',
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}]);

// app.directive('name', [function () {
// 	return {
// 		restrict: 'E',
// 		// templateUrl: '<h1>OLA</h1>',
// 		templateUrl: 'conta-detalhe.html',
// 		link: function (scope, iElement, iAttrs) {
			
// 		}
// 	};
// }]);