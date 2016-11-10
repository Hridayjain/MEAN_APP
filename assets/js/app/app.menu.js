 app.service('AppMenuService',['$rootScope',function($rootScope){
    var menu = [
      {
        link : 'dashboard',
        title: 'Dashboard',
        icon: 'dashboard'
      },
      {
        link : 'user',
        title: 'Friends',
        icon: 'group'
      },
      {
        link : 'meeting',
        title: 'Messages',
        icon: 'message'
      }
    ];
    var adminMenu = [
      {
        link : 'user',
        title: 'Trash',
        icon: 'delete'
      },
      {
        link : 'sheduleMeeting',
        title: 'Settings',
        icon: 'settings'
      }
    ];

    this.loadMenu = function() {
      return menu;
    }
    this.loadAdminMenu = function() {
      return adminMenu;
    }
}])

