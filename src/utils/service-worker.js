self.__precacheManifest = [].concat(self.__precacheManifest || [])

/* eslint-disable no-undef */
if (typeof workbox.precaching.suppressWarnings === 'function') {
  workbox.precaching.suppressWarnings()
}
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
/* eslint-enable no-undef */

// install new service worker when ok, then reload page.
self.addEventListener('message', msg => {
  if (msg.data.action === 'skipWaiting') {
    self.skipWaiting()
  }
})
