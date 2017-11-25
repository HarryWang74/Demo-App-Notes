angular.module('myApp', ['ngComponentRouter']);
// convert componet to HTML5 component
// requireBase need set to false. Otherwise need set base="" in index
angular.module('myApp').config(function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})
angular.module('myApp').value('$routerRootComponent', 'app')

angular.module('myApp').component('app', {
    templateUrl: "app.html",
    controllerAs: "ctrl",
    controller: [function(){
        var ctrl = this;

        ctrl.$onInit = function () {

        };
    }],
    $routeConfig: [
        { path: "/", component: "productsList", name: "ProductsList", useAsDefault: true  },
        { path: "/about", component: "about", name: "About" },
        { path: "/product/:id", component: "productDetail", name: "ProductDetail" },
        { path: "/**", redirectTo: ["ProductsList"] }
    ],
});
