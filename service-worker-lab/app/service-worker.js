self.addEventListener('install', () => console.log `Service worker installed`);
self.addEventListener('activate', () => console.log `Service worker activated`);
self.skipWaiting();

self.addEventListener('fetch', (event) => console.log `fetching... ${event.request.url}`)