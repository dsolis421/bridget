app.controller('MortgageController',['$scope', function($scope, $rootScope) {
  $scope.title = 'Mortgage';
  $scope.amount;
  $scope.rate;
  $scope.term;
  $scope.payment;
  $scope.calcPayment = function() {
    if ($scope.amount === null || $scope.rate === null || $scope.term === null) {
      return;
    } else {
      var n = $scope.term * 12;
      var i = ($scope.rate / 100) / 12;
      payment = $scope.amount * ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
      $scope.payment = payment.toFixed(2);
    };
  };
  $scope.mortgageChange = function() {
    console.log('amount',$scope.amount);
    console.log('rate',$scope.rate);
    console.log('term',$scope.term);
    $scope.calcPayment();
  };
}]);
