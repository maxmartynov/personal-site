
if (typeof angular === 'undefined') {
  document.write(
    unescape('<script src="lib/angular/angular.min.js" type="text/javascript"></script>')
  );
}


try {
  angular.module('ui.router')  
} catch (e) {
  document.write(
    unescape('<script src="lib/angular-ui-router/release/angular-ui-router.min.js" type="text/javascript"></script>')
  );
}
