export function preloadImage (url, callback) {
  const img = new Image()
  img.src = url
  img.onload = callback
}

export function preloadImages (urls, callback) {
  let loadedCounter = 0
  const toBeLoadedNumber = urls.length

  urls.forEach((url) => {
    preloadImage(url, () => {
      loadedCounter++

      if (loadedCounter === toBeLoadedNumber &&
        typeof callback === 'function') {
        callback()
      }
    })
  })
}
