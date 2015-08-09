angular.module('breeze')
  .controller('eventContent',function($scope) {
    $scope.status.robo1 = true;
    $scope.toggleContent = function() {
      $scope.status.robo1
    }
  })
