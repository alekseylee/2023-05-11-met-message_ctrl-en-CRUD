angular.module("greeting_app", []).controller(
  // de naam van de controller
  "greeting_controller",

  // contructor functie voor de controller
  function ($scope) {
    $scope.change_name = function () {
        $scope.message = "Welcome " + $scope.full_name
    }

  }
);
