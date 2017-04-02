(function(){
  'use strict';

  angular.module('App').config(config);

  config.$inject = ['$httpProvider', 'tmhDynamicLocaleProvider', '$translateProvider', 'defaultLanguage'];
  function config($httpProvider, tmhDynamicLocaleProvider, $translateProvider, defaultLanguage) {
    // firebase.initializeApp(FirebaseDetails);


    tmhDynamicLocaleProvider.localeLocationPattern('app/locales/angular-locale_{{locale}}.js');
    $translateProvider
      .useStaticFilesLoader({
        prefix: 'app/i18n/',
        suffix: '.json',
      });
    $translateProvider.preferredLanguage(defaultLanguage);
  }
})();
