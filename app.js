(function(){
	 'use strict';

    angular.module('LunchCheck',[])
      .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope, $filter){
      var separator = ',';
      $scope.txtLunchMenu = '';
      $scope.outputMsg = '';

      $scope.btnCheck = function(){
          var inputStr = $scope.txtLunchMenu;
          var outputStr = 'Please enter data first';
          var lunchItems = '';
          var totalItems = 0;
          var emptyItems = 0;

          if(inputStr != ''){
            lunchItems = inputStr.split(separator);
            totalItems = lunchItems.length;

            for (var i in lunchItems)
                if(lunchItems[i].trim() == '')emptyItems++;
    
            if((totalItems - emptyItems) > 3)
              outputStr = 'Too much!';
            else outputStr = 'Enjoy!';
          }
          $scope.outputMsg = outputStr;
      };
    };
	})();
