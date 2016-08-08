app.config(['$stateProvider','$urlRouterProvider','$locationProvider'],function ($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/404');
    $stateProvider
    .state('index', {
        url:'/',
        templateUrl: '../partials/home.html',
        controller: 'HomeController'
    })
});