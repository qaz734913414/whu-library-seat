/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "694a5420b8b980d0d3836dd1303897e1"
  },
  {
    "url": "assets/css/0.styles.18f73d7a.css",
    "revision": "e5a5fc7e07dafe38fcaaf436bb7b877e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d353ded4.js",
    "revision": "0ee7192205596c6826099750382fc842"
  },
  {
    "url": "assets/js/11.67c235e4.js",
    "revision": "6a9fafdee567709143fcc072e471b391"
  },
  {
    "url": "assets/js/12.6933b7b9.js",
    "revision": "900a787c6e497acdf5c2e655b7eb2753"
  },
  {
    "url": "assets/js/13.afb985dd.js",
    "revision": "d012590bf236eaf7525953623faddd98"
  },
  {
    "url": "assets/js/14.3c4f85ac.js",
    "revision": "ce0afdec3243c9531304527d45dca5ea"
  },
  {
    "url": "assets/js/2.1d57435e.js",
    "revision": "eff4e696dec41bd7b37fbda99d87b3d7"
  },
  {
    "url": "assets/js/3.5b60ea15.js",
    "revision": "fdb15555127134979b510a80120b392d"
  },
  {
    "url": "assets/js/4.6a1dff75.js",
    "revision": "2284e86d310a85464465b63218d212d3"
  },
  {
    "url": "assets/js/5.8ba87aa4.js",
    "revision": "2910691555c6ff2f45fc3de80056561b"
  },
  {
    "url": "assets/js/6.6d750ec3.js",
    "revision": "ce0d2130ddeb1f6e9a76a36ed6acf864"
  },
  {
    "url": "assets/js/7.fd95d373.js",
    "revision": "7cc1b153a88b8095d9a717ef8eef9d4c"
  },
  {
    "url": "assets/js/8.ebe77ac5.js",
    "revision": "70896ca98cae70ce4f8f44fc5e34e922"
  },
  {
    "url": "assets/js/9.fbd4b569.js",
    "revision": "ff45a252c18632f0645cf81304ad16c6"
  },
  {
    "url": "assets/js/app.4a0f0aee.js",
    "revision": "124017a27bcc638108e014b66008e347"
  },
  {
    "url": "hero.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "cc57212b4330c6bb093c84c097e5ec7a"
  },
  {
    "url": "logo.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "project/index.html",
    "revision": "98344dfa8322f1345277604d0276e0aa"
  },
  {
    "url": "specification/auth.html",
    "revision": "36a991ffa867c95c3b20bc5082061ac9"
  },
  {
    "url": "specification/cancel.html",
    "revision": "d47c4224627037ee6a0caaf3efb3e1ee"
  },
  {
    "url": "specification/change.html",
    "revision": "367d6fdffe91b1570404fafa49ba137d"
  },
  {
    "url": "specification/index.html",
    "revision": "f1d541e597b469e9fd48cad019788efa"
  },
  {
    "url": "specification/menu.html",
    "revision": "a144b7ecee8745849a8b38fb765392b1"
  },
  {
    "url": "specification/others.html",
    "revision": "e24ab3120578d77ea6042c4cf1e80d68"
  },
  {
    "url": "specification/reservation.html",
    "revision": "16ce38b83dc5a6313ee399378fe55e88"
  },
  {
    "url": "specification/settings.html",
    "revision": "c564ed8e9005be2dbf8100ffcdc05e76"
  },
  {
    "url": "specification/stop.html",
    "revision": "5b3ce4cc8682225c2ee4e0dfc8b291fa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
