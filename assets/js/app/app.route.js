var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/user');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        .state('dahshboard', {
            url: '/dahshboard',
            templateUrl: 'partial-home.html'
        })

        .state('user', {
            url: '/user',
            templateUrl: '/assets/components/user/view/List.html',
        })

        .state('meeting', {
            url: '/meeting',
            templateUrl: 'partial-home.html'
        })


        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});