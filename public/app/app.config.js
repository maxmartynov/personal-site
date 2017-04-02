(function(){
  'use strict';

  angular.module('App').config(config);

  config.$inject = ['$httpProvider', '$translateProvider', 'defaultLanguage'];
  function config($httpProvider, $translateProvider, defaultLanguage) {
    // firebase.initializeApp(FirebaseDetails);

    $translateProvider
      .useStaticFilesLoader({
        prefix: 'app/i18n/',
        suffix: '.json',
      });
    $translateProvider.preferredLanguage(defaultLanguage);
    $translateProvider.useSanitizeValueStrategy('escape');
  }
})();
