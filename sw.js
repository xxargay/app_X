self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app_X').then((cache) => cache.addAll([
      '/app_X/',
      '/app_X/index.html',
      '/app_X/index.js',
      '/app_X/style.css',
      '/app_X/images/fox1.jpg',
      '/app_X/images/fox2.jpg',
      '/app_X/images/fox3.jpg',
      '/app_X/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
