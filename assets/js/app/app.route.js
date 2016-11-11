var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider,Templates) {
    
    $urlRouterProvider.otherwise('/user');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        .state('dahshboard', {
            url: '/dahshboard',
            templateUrl: Templates.DASHBOARD_HTML,            
        })

        .state('user', {
            url: '/user',
            templateUrl: Templates.USER_LIST_HTML,
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