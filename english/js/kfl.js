/**
 * Created by bjwsl-001 on 2017/7/3.
 */

var app = angular.module('kfl', ['ng', 'ngRoute']);


//配置路由词典
app.config(function ($routeProvider) {
    $routeProvider
        .when('/kflStart', {
            templateUrl: 'tpl/start.html'
        })
        .when('/kflMain', {
            templateUrl: 'tpl/main.html'
        })
        .when('/kflDetail', {
            templateUrl: 'tpl/detail.html'
        })
        .when('/kflOrder', {
            templateUrl: 'tpl/order.html'
        })
        .when('/kflMyOrder', {
            templateUrl: 'tpl/myOrder.html'
        })
        .otherwise({redirectTo:'/kflStart'})
});


app.controller('bodyCtrl',['$scope','$location',

    function ($scope,$location) {
        $scope.jump = function (desPath) {
            $location.path(desPath);
        }
    }

]);

app.controller('mainCtrl',['$scope','$http',
    function($scope,$http){
    $scope.hasMore=true;
    $scope.kw='';//将用户的输入绑定到该变量中

        //取得列表的数据显示
        $http
            .get('data/dish_getbypage.php')
            .success(function(data){
                $scope.dishList=data;
            })
    //定义一个加载更多的方法
        $scope.loadMore=function(){
            $http
                .get('data/dish_getbypage.php?star ')
        }
}]);


