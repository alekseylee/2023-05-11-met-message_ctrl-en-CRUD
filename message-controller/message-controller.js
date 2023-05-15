angular.module('message-app', []).controller(
  
  // de naam van de controller
  'message-controller', 
  
  // constructor functie voor de controller
  function($scope) {

    $scope.messages = [
      {
        time: '2014-01-01 12:00:00',
        sender: 'John Doe',
        subject: 'Hello',
        body: 'Hi, how are you?'
      },
      {
        time: '2014-01-01 12:00:00',
        sender: 'Marry Woe',
        subject: 'Hello',
        body: 'Why you care?'
      },
      {
        time: '2014-01-01 12:00:00',
        sender: 'John Doe',
        subject: 'Hello',
        body: 'I just want to know.'
      },
      {
        time: '2014-01-01 12:00:00',
        sender: 'Marry Woe',
        subject: 'Hello',
        body: 'I am fine.'
      } 
    ];

    $scope.addMessage = function(m) {
      $scope.messages.push(m);
    };

    $scope.addMessageParam = function(time, sender, subject, body) {
      $scope.messages.push({
        time: Date.now(),
        sender: sender,
        subject: subject,
        body: body
      });
    }

    $scope.deleteMessage = function(m) {
      $scope.messages.splice($scope.messages.indexOf(m), 1);
    }

    $scope.updateMessage = function(m, i) {
      $scope.messages[i] = m;
    }

  }
);