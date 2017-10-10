// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app')
  .controller('WelcomeController', ['$scope', function($scope,) {
    $scope.tester = "Test";
  }])
  .controller('GetCurrentController', ['$scope', 'Place', function($scope,
      Place) {
    $scope.reviews = Review.find({
      filter: {
        include: [
          'coffeeShop',
          'reviewer'
        ]
      }
    });
  }])
  .controller('SearchController', ['$scope', 'Place', '$state', function($scope,
      Place, $state) {

      $scope.submitForm = function(){

        if ($scope.form.query.street  &&
            $scope.form.query.street  !== ""  &&
            $scope.form.query.city    &&
            $scope.form.query.city    !== "") {

            var qry = $scope.form.query;

            Place.placeLocate(qry ,function(result){
               alert(result.geometry, " ", result.geometry);
               //$state.go('currentPlace');

            });
        }

      };

  }]);
