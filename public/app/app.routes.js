(function(){
  'use strict';

  angular.module('App').config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider', 'tmhDynamicLocaleProvider', '$translateProvider', 'defaultLanguage'];
  function routes($stateProvider, $urlRouterProvider, $locationProvider, $qProvider, tmhDynamicLocaleProvider, $translateProvider, defaultLanguage) {
    $stateProvider
      .state('home', home);

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
    $qProvider.errorOnUnhandledRejections(false);
    $locationProvider.html5Mode(true)

    $urlRouterProvider.rule(function($injector, $location) {
      var path = $location.path();
      var hasTrailingSlash = path[path.length-1] === '/';
      if(hasTrailingSlash) {
        var newPath = path.substr(0, path.length - 1); 
        return newPath; 
      } 
    });


    tmhDynamicLocaleProvider.localeLocationPattern('app/locales/angular-locale_{{locale}}.js');
    $translateProvider
      .useStaticFilesLoader({
        prefix: 'app/i18n/',
        suffix: '.json',
      });
    $translateProvider.preferredLanguage(defaultLanguage);
  }




  /*
   * State Controllers
   * */
  var home = {
    url: '/',
    templateUrl: 'app/pages/home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'ctrl',
  };
  /*
   * End State Controllers
   * */
})();
