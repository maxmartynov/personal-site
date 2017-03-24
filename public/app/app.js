(function(){
  'use strict';

  angular.module('App', [
    'ui.router',
    'pascalprecht.translate',
    'tmh.dynamicLocale',
  ]);


  angular.module('App').run(run);

  run.$inject = ['$rootScope'];
  function run($rootScope) {
    console.log('$rootScope');
  }
})();
