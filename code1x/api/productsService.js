angular.module('myApp').factory('productsService', ['$http', '$q', function ($http, $q) {
    var productsService = {};

    productsService.getProductsInfo = function(){
        return $q(function (success, error) {
            $http.get('/api/productsInfo.json')
            .success(function (data, status, headers, config) {
                success(data);
                console.log(data);
            })
            .error(function (data, status, headers, config) {
                console.log(data)
                error(data);
            });
        });
    }

    productsService.changeRating = function (id, rating) {
      return $q(function (success, error) {
          $http.post('/api/'+id)
          .success(function (data, status, headers, config) {
              success(data);
              console.log(data);
          })
          .error(function (data, status, headers, config) {
              console.log(data)
              error(data);
          });
      });
    }

    productsService.getProductDetail = function(id){
        return $q(function (success, error) {
            $http.get('/api/' + id + '.json')
            .success(function (data, status, headers, config) {
                success(data);
                console.log(data);
            })
            .error(function (data, status, headers, config) {
                console.log(data)
                error(data);
            });
        });
    }

    return productsService;
}]);
