'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4958efe8d7902c60468399bf174cb537",
".git/config": "1480bc48d392f82bbb2f5df1549ac78c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "eab9992abf29cd4106108af5c2431272",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dd574b0a2a9b5b4e43898e006ea2ec3f",
".git/logs/refs/heads/main": "3ac72c3e164b335bf4d9e652add6f2e8",
".git/logs/refs/remotes/origin/main": "50c5274b18990971fd705388f31e3697",
".git/objects/0b/eb361fa418c3273316d2775db549530756f41c": "fb2299cd8086c490c4dfafa17706c93b",
".git/objects/0e/48c5359f0cdf4c0d1c7561774914370104ac48": "5046a2ab039b71e5dd97504055f968a5",
".git/objects/12/9f120f86f17c90f101356635934d23e7e6b463": "eecf6853cf87587b342166a33610cf7b",
".git/objects/14/6fe1267b39ff94543c9e8be0c8ebd0cc36c72d": "d185de97466e53c0c93cc5c33e306a58",
".git/objects/20/1b1e856e72359df6ceb1d6755fd27e905b6e13": "7e21fe5c33b416f56e5c5eeaee362015",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2c/6944af48abcc231222bf8335f50c2d354d65b3": "e1272a3c583b28c1f9de0f886d86bd94",
".git/objects/36/90338d4235db2ffc49362ba65db0086cda1c07": "eded8b293f90c3e46360d75c3dc2ff99",
".git/objects/3f/eb627e7a1c0cf1af23054816d8f185d5a6ed12": "f2be70a93820e9157ff68226a9a49616",
".git/objects/40/889fe8d2d0a439258275f5f484aad33cb563a2": "704534b12cfee7c2b40b41cbcd73cf24",
".git/objects/40/f4aa41374bd650b7717ca3adca67524173d0dd": "120bc658ef87749797333b62c0ee616a",
".git/objects/45/8e996b4d566d7d1d4f0ec8afb4f3f6763d7e99": "f7c52be548437a0e24a738406f9d1cc5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/8c2a197812a29261873d65ec45d70ba22ba912": "95bd8b5ce2248523d4d799a84e7952fb",
".git/objects/53/a294a5c0ec19088fc994327e25c60ec93a1a11": "4a03d1450b93011c977279b025a5dc38",
".git/objects/57/955b571fbfd30b5eb706f8db929f9569e0b821": "550a725a993c3e18307c6781513cfcdd",
".git/objects/59/0d57366cd4f831d108defb79173cb614cdf805": "4205e37566a745741d9afed7d0c5bd9e",
".git/objects/65/861b91fe7af65372dcdeed4c8d71a8301a3760": "934d64c543d9c19ecb51fa44d35a1d4b",
".git/objects/6b/f3b5a5b5535fb0795928b4566165f85e30a268": "40b021a7935ff7d17c670cd0155fef98",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/48b92e850ab9e8a1923ee791e9d9d36550efc2": "3b68602883168db5351727da54d85cfb",
".git/objects/83/617348637c4e73559523007036c3e1796bc58e": "e16bf7b09b79f5ee95af4d8cae960216",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/54124014423af42b2095f862df42deb6e0d1b9": "9b55750d163ac0124e39e0c024d24b72",
".git/objects/8b/c2b352a732317219e257013747877b95f211cd": "75b431acb59399a9bc0a3794d10714eb",
".git/objects/95/1b8704bc8858e8292ee141cb4835ad863ee303": "be697b7323cd97581b6328b64f77b76c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/a8992cefed520920f5ed94055b897994840477": "abed686fc0f29799b7ccf06fe914adbf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/ed7989cb0d82322d359540b05efe02c6f8f01d": "167197fa227d34d34fd6afff23948d6a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/0d30bc4f68b877048c416d4d8e1a1b8608077a": "24d53e454320c1120f72ba73a8ec6bf1",
".git/objects/c5/a54a0f758d1d02d3a19799f26df4ed8326b7ea": "8bb9e19dd69aaf492291de36812c3c37",
".git/objects/da/3d995b63352973e1622f5ac6d976e98e5c9176": "ea819018ca8abb95a83088a3f3129202",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/dbbf2e81b5d8be5dacc0697cf4ca42dcfcb963": "09269294656e285a89f0b5593c372cbf",
".git/objects/f1/7952fb8b575e6afa4eb508b889c242004c6db0": "2a0667a63b31559df82981299cc5df23",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fa/124856756ad80fea08c0e9e75ba5858bee8592": "ac8d8a3c3e47548f35f23add582e3197",
".git/objects/fb/7448f3baa158c64e3c05243948733b327ce381": "eeee117e9de1d2142475665165f87cf1",
".git/refs/heads/main": "4b020e95077e70515b458c129b7a1d40",
".git/refs/remotes/origin/main": "4b020e95077e70515b458c129b7a1d40",
"assets/AssetManifest.json": "66ef587681df16afc2b76d31958b81fe",
"assets/assets/back_arrow.svg": "f542caff4d67d3ebf571b3dd2fc25fc4",
"assets/assets/bg_logo.svg": "cb70d79dd715afa796b213ad9b48070d",
"assets/assets/circle.svg": "cb6500511d890f500279e907af7bf6a2",
"assets/assets/health_app_img.png": "f3e410869dad2ceb46cdd470caf47031",
"assets/assets/health_app_logo.svg": "0bf550559c8d95971fcb1e473594592a",
"assets/assets/memory_game.svg": "5afb029cbbae328105d148fa99450cd0",
"assets/assets/mem_game_img.png": "13899239f7e6cbe505908f10e609fd37",
"assets/assets/ol_img.png": "e48b37b4bed40f8d77440a8ccd805281",
"assets/assets/ol_logo.svg": "3871328b8607e8b544de46381a9da472",
"assets/assets/plant_collection.svg": "207b5858b344b776ee16745e09ba76bf",
"assets/assets/plant_coll_img.png": "ee33162e8bfe8e71199b32afcf85324f",
"assets/assets/Stofan_img.png": "118d8a16246e552ac31389c6dde764ac",
"assets/assets/Stofan_logo.svg": "920d539e9a5727ba9b94ed2ed41a2fb8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "96ea79119d0f206a3c92305621cee2e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "9f64e95510ed93ba9e5fb43f8bf91286",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c2a0a9917760a21b84e87ba153e73960",
"/": "c2a0a9917760a21b84e87ba153e73960",
"main.dart.js": "a75d1e8c2f7e85ff90507598ced76d5f",
"manifest.json": "3d9b369265eb00a2b9f833c932327313",
"version.json": "9a4dddba415c9ee5265cd5f5d9963a6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
