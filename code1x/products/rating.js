angular.module('myApp').component('rating', {
    templateUrl: "/products/rating.html",
    controllerAs: "ctrl",
    bindings:{
      rating: '<'
    },
    controller: [function(){
        var ctrl = this;

        ctrl.maxRating = 5;

        ctrl.$onInit = function () {
        };

        ctrl.getMaxRating = function(){
            return new Array(ctrl.maxRating);
        }

        ctrl.changeRating = function(index){
            ctrl.rating = index + 1;
        }

        ctrl.$onChanges = function (changes) {
            console.log(changes);
            if (typeof (changes.rating) != "undefined" && typeof (changes.rating.currentValue) != "undefined") {
                ctrl.rating = changes.rating.currentValue;
            }
        }
    }],
  });
