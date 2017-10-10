// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'views/search-form.html',
        controller: 'SearchController',
      })
      .state('currentPlace', {
        url: '/currentPlace',
        templateUrl: 'views/currentPlace.html',
        controller: 'GetCurrentController'
      })
      .state('notConnected', {
        url: '/notConnected',
        templateUrl: 'views/no-connection.html',
      })
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
      });

    $urlRouterProvider.otherwise('welcome');
  }])
  ;
