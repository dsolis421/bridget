app.controller('BridgetController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.greeting = "Hi, I\'m Bridget and all I do is budget!";
  $scope.face = 'img/bettie_normal.png';
  $scope.appchoices = {
    type: 'select',
    value: 'How can I help you today?',
    choices: ['How can I help you today?','Calculate Monthly Budget','Estimate Mortgage Payment']
  };
  $scope.looks = {
    angry: 'img/bettie_angry.png',
    concerned: 'img/bettie_concerned.png',
    normal_smile: 'img/bettie_normal_smile.png',
    normal: 'img/bettie_normal.png',
    sad: 'img/bettie_sad.png',
    shocked: 'img/bettie_shocked.png',
    smile: 'img/bettie_smile.png',
    talk_left: 'img/bettie_talk_left',
    talk_right: 'img/bettie_talk_right',
    thinking_left: 'img/bettie_thinking_left',
    thinking_right: 'img/bettie_thinking_right',
    tilt_left: 'img/bettie_tilt_left',
    tilt_right: 'img/bettie_tilt_right'
  };
  $scope.responses = {
    helpful_affirm: "Sure, I can do that!",
    helpful_negative: "Sorry, I wish I could.",
    sarcastic_affirm: "Naturally, I live for this.",
    sarcastic_negative: "Let's not and say that we did.",
    angry_affirm: "Hell yes!",
    angry_negative: "Hell no!",
    learn_income: "Let\'s determine your monthly income.",
    have_job: "Do you have a job?",
    how_often: "How often do you get paid?",
    other_income: "Do you have any other income that you want to include, like child support or alimony?",
    learn_debt: "Now, let's determine your monthly bill payments. This is any monthly payment you make for outstandng debt, such as car payments, rent/mortgage, or credit cards.",
    great_ratio: "Your income compared to your debt is excellent. You can afford to take on more debt, if you wish.",
    good_ratio: "Your income compared to your debt is right where it should be. I would not recommend taking on more debt at this time.",
    bad_ratio: "Your debt is high compared to your income. I would strongly recommend you pay down some of your debt.",
    thankyou: "Thank you!",
    yourewelcome: "You're very welcome",
    imsorry: "I'm sorry",
    mortgage_response: "I can estimate a monthly mortgage payment if you can provide the loan amount, the interest rate, and the loan term (in years)"
  };
  $scope.updateBridget = function(look, response) {
    $scope.face = $scope.looks[look];
    $scope.greeting = $scope.responses[response];
  };
  $scope.showBudget = function() {
    $rootScope.budget = true;
    $rootScope.mortgage = false;
    $scope.updateBridget('normal_smile','helpful_affirm');
  };
  $scope.showMortgage = function() {
    $rootScope.budget = false;
    $rootScope.mortgage = true;
    $scope.updateBridget('normal_smile','mortgage_response');
  };
  $scope.changeBridget = function() {
    if($scope.appchoices.value === 'Estimate Mortgage Payment') {
      $scope.showMortgage();
    } else if ($scope.appchoices.value === 'Calculate Monthly Budget'){
      $scope.showBudget();
    } else {
      return;
    }
  };
}]);
