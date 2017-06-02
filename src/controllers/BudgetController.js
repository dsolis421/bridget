app.controller('BudgetController',['$scope','$rootScope', function($scope, $rootScope) {
  $scope.title = 'Monthly Budget';
  $scope.budgetdesc = '';
  $scope.budgetamount;
  $scope.income = [];
  $scope.debt = [];
  $scope.ratio;
  $scope.disposable;
  $scope.analysis_response = '';
  $scope.addToIncome = function() {
    var incomeentry = { id: Math.floor(Math.random() * 99999),
      description: $scope.budgetdesc,
      amount: $scope.budgetamount };
    $scope.income.push(incomeentry);
    $scope.budgetdesc = '';
    $scope.budgetamount = null;
  };
  $scope.addToDebt = function() {
    var debtentry = { id: Math.floor(Math.random() * 99999),
      description: $scope.budgetdesc,
      amount: $scope.budgetamount };
    $scope.debt.push(debtentry);
    $scope.budgetdesc = '';
    $scope.budgetamount = null;
  };
  $scope.removeIncome = function (index) {
    console.log('remove fired', $scope.income[index].id);
    var newincome = $scope.income.filter(function(x) {
      console.log(x.id);
      return x.id !== $scope.income[index].id;
    });
    $scope.income = newincome;
  };
  $scope.removeDebt = function (index) {
    console.log('remove fired', $scope.debt[index].id);
    var newdebt = $scope.debt.filter(function(x) {
      console.log(x.id);
      return x.id !== $scope.debt[index].id;
    });
    $scope.debt = newdebt;
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
  $scope.calcDispIncome = function() {
    $scope.disposable = ($scope.sumEntries($scope.income) - $scope.sumEntries($scope.debt)).toFixed(2);
    console.log($scope.disposable);
  };
  $scope.analyzeAndRepond = function () {
    if ($scope.ratio <= 30) {
      $scope.analysis_response = 'Your debt to income ratio looks really good.\
        Which means your income far surpasses the amount of monthly debt payments you are required to make.\
        You are in a good position to make a major purchase or take on more debt.'
    } else if ($scope.ratio > 30 && $scope.ratio <= 45) { $scope.analysis_response =
      'Your debt to income ratio is right about where it should be.\
       The amount of income you receive is sufficent to cover your monthly debt payments, while providing extra disposable\
       income for other purchases.  More importantly, it leaves room for emergency expenses like doctor visits or car repairs.'
    } else if ($scope.ratio > 45 && $scope.ratio <= 70) { $scope.analysis_response =
      'Your debt to income ratio could use some improvement.  While there\'s no immediate need for concern, you will have a hard time\
       affording a major purchase or qualifying for a new loan.  Ideally, your debt to income ratio should be closer to 43%.  It would be\
       wise to consider paying down some of your debt. Consider also that a little more disposable income will help with\
       unexpected expenses like car repairs or doctor visits.'
    }  else { $scope.analysis_response =
      'Your debt to income ratio needs some work.  Your income may not be enough to cover your monthly debt payments, which\
       could could strain your monthly budget. But don\'t stress, you can look for opportunities to refinance your debt in a way\
       that lowers your monthly payments.  You could also consider eliminating monthly expenses that are not as critical.\
       Your goal should be to reduce your DTI as much as possible.  You can do it!'
    };
  };
  $scope.handleBudget = function() {
    $scope.calcDebtToIncome();
    $scope.calcDispIncome();
    $scope.analyzeAndRepond();
  };
}]);
