 app.service('AppMenuService',['$rootScope',function($rootScope){
    var menu = [
      {
        link : 'dashboard',
        title: 'Dashboard',
        icon: 'zmdi zmdi-view-dashboard'
      },
      {
        link : 'user',
        title: 'Friends',
        icon: 'zmdi zmdi-view-dashboard'
      },
      {
        link : 'meeting',
        title: 'Messages',
        icon: 'zmdi zmdi-view-dashboard'
      }
    ];
    var adminMenu = [
      {
        link : 'user',
        title: 'User Management',
        icon: 'zmdi zmdi-accounts-list'
      },
      {
        link : 'calendar',
        title: 'Calendar',
        icon: 'zmdi zmdi-calendar-note'
      }
    ];

    this.loadMenu = function() {
      return menu;
    }
    this.loadAdminMenu = function() {
      return adminMenu;
    }
}])

