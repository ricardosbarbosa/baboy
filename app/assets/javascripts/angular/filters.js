app = angular.module('filters', []);

app.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

app.filter('efetuado', function($sce) {
  return function(input) {
    return input ? $sce.trustAsHtml('<span class="glyphicon glyphicon-thumbs-up"></span>') : $sce.trustAsHtml('<span class="glyphicon glyphicon-thumbs-down"></span>');

    // <span class="badge">1</span> : '<span class="badge badge-success"> 1</span>';
  };
});