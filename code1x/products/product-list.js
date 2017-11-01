angular.module('myApp').component('productsList', {
    templateUrl: "products/product-list.html",
    controllerAs: "ctrl",
    controller: [function(){
        var ctrl = this;
        ctrl.products = [
            {
                "productId": 1,
                "productName": "ProductName01",
                "price": 19.95,
                "rating": 1,
                "imageUrl": "http://via.placeholder.com/2000x600",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "productId": 2,
                "productName": "ProductName02",
                "price": 29.95,
                "rating": 2,
                "imageUrl": "http://via.placeholder.com/2000x600",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
        ]
        ctrl.$onInit = function () {

        };
    }],
});
