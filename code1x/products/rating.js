angular.module('myApp').component('rating', {
    templateUrl: "/products/rating.html",
    controllerAs: "ctrl",
    bindings:{
      productid: '<',
      rating: '<'
    },
    controller: ['productsService', function(productsService){
        var ctrl = this;

        ctrl.maxRating = 5;

        ctrl.$onInit = function () {
        };

        ctrl.getMaxRating = function(){
            return new Array(ctrl.maxRating);
        }

        ctrl.changeRating = function(index){
            ctrl.rating = index + 1;
            productsService.changeRating(ctrl.productid, ctrl.rating).then(
                function (success) {
                    console.log(success);
                },
                function (error) {
                    console.log(error);
                }
            );
        }

        ctrl.$onChanges = function (changes) {
            console.log(changes);
            if (typeof (changes.rating) != "undefined" && typeof (changes.rating.currentValue) != "undefined") {
                ctrl.rating = changes.rating.currentValue;
            }
        }
    }],
  });
