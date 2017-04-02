(function(){
  'use strict';

  angular.module('App', [
    'ui.router',
    'pascalprecht.translate',
  ]);


  angular.module('App').run(run);

  run.$inject = ['$rootScope', 'defaultLanguage', '$translate', '$localStorage'];
  function run($rootScope, defaultLanguage, $translate, $localStorage) {
    $rootScope.currentLang = '';

    $rootScope.init    = init;
    $rootScope.setLang = setLang;


    $rootScope.init();
    return this;



    function init() {
      $rootScope.setLang($localStorage.get('lang') || defaultLanguage);
    }



    function setLang(lang) {
      $rootScope.currentLang = lang;
      $translate.use(lang);
      $localStorage.set('lang', lang);
    }
  }
})();
