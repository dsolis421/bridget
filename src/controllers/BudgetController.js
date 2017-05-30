app.controller('BudgetController',['$scope','$rootScope', function($scope, $rootScope) {
  $scope.title = 'Monthly Budget';
  $scope.incomedesc = '';
  $scope.incomeamount;
  $scope.debtdesc = '';
  $scope.debtamount;
  $scope.income = [];
  $scope.debt = [];
  $scope.ratio;
  $scope.addToIncome = function() {
    var incomeentry = {};
    incomeentry.description = $scope.incomedesc;
    incomeentry.amount = $scope.incomeamount;
    $scope.income.push(incomeentry);
    $scope.incomedesc = '';
    $scope.incomeamount = null;
  };
  $scope.addToDebt = function() {
    var debtentry = { description: $scope.debtdesc, amount: $scope.debtamount };
    $scope.debt.push(debtentry);
    $scope.debtdesc = '';
    $scope.debtamount = null;
  };
  $scope.sumEntries = function(arr) {
    var sum = 0;
    var scope = arr.length;
    for (x = 0; x < scope; x++) {
      sum = sum + arr[x].amount;
    };
    console.log(sum);
    return sum;
  };
  $scope.calcDebtToIncome = function() {
    $scope.ratio = (($scope.sumEntries($scope.debt) / $scope.sumEntries($scope.income)) * 100).toFixed(2);
    console.log($scope.ratio);
  };
}]);
