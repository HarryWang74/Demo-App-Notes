
angular.module('myApp').component('productDetail', {
    templateUrl: "/products/product-detail.html",
    controllerAs: "ctrl",
    bindings: {
        "$router": "<",
    },
    controller: ['productsService', function(productsService){
        var ctrl = this;

        ctrl.$onInit = function () {

        };

        ctrl.$routerOnActivate = function (next) {
            ctrl.productId = parseInt(next.params.id);
            loadData();
        };
        function loadData(){
            productsService.getProductDetail(ctrl.productId).then(
                function (success) {
                    ctrl.product = success;
                    console.log(success);
                },
                function (error) {
                    console.log(error);
                }
            );
        }
    }],
});
