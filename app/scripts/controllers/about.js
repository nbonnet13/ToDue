'use strict';

/**
 * @ngdoc function
 * @name toDueApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the toDueApp
 */
angular.module('toDueApp')
  .controller('AboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });