self.addEventListener('install', function(event) {
    console.log('install event called');
});

self.addEventListener('fetch', function(event) {
    console.log('fetch event called');
});

self.addEventListener('activate', function(event) {
    console.log('activate event called');
});
