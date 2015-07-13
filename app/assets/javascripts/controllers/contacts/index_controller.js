(function(){

  var controllers = angular.module('freelanceApp');

  controllers
    .controller('ContactsIndexController',[
      '$scope',
      '$resource',
      function($scope, $resource){
        var self = this;
        $scope.contacts = [{name:'hola'}];
      }
    ]);
})();
