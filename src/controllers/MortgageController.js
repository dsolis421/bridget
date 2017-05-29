app.controller('MortgageController',['$scope', function($scope, $rootScope) {
  $scope.title = 'Mortgage Payment';
  $scope.amount;
  $scope.rate;
  $scope.term;
  $scope.payment;
  $scope.calcPayment = function() {
    if ($scope.amount === null || $scope.amount === undefined || $scope.amount < 1 ||
        $scope.rate === null || $scope.rate === undefined || $scope.rate < 1 ||
        $scope.term === null || $scope.term === undefined || $scope.term < 1) {
      $scope.payment = undefined;
    } else {
      var n = $scope.term * 12;
      var i = ($scope.rate / 100) / 12;
      payment = $scope.amount * ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
      $scope.payment = payment.toFixed(2);
    };
  };
  $scope.mortgageChange = function() {
    $scope.calcPayment();
  };
}]);
