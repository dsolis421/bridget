var app = angular.module('bridget-app',[]);

app.run(function ($rootScope) {
  $rootScope.budget = false;
  $rootScope.mortgage = false;
  $rootScope.about = false;
});
