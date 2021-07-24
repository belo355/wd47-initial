const CACHE_NAME = 'ceep-cache-v1'; 
const CACHE_FILES = ([
  '/',
  '/index.html',
  '/favicon.ico',
  '/img/bin2.svg',
  '/img/edit.svg',
  
  '/css/botaoSync.css',
  '/css/cabecalho.css',
  '/css/cartao.css',
  '/css/container.css',
  '/css/formNovoCartao.css',
  '/css/mural.css',
  '/css/opcoesDaPagina.css',
  '/css/opcoesDoCartao.css',
  '/css/reset.css', 

  '/js/app.js',
  '/js/storage/db.js',
  '/js/storage/loginUsuario.js',
  '/js/view/btnAjuda.js',
  '/js/view/btnMudaLayout.js',
  '/js/view/btnSync.js',
  '/js/view/mural.js',
  '/js/view/notificacao.js',
  '/js/view/btnLogout.js',
  '/js/view/formCartao.js',
  '/js/lib/jquery.js'

]).map(item => '/projeto' + item); 

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_FILES); 
    })
  ); 
}); 

self.addEventListener('fetch', function(e){
  e.respondWith(fetchServidorOuChache(e.request)); 
}); 

async function fetchServidorOuChache(request){
  try {
    return await fetch(request); 
  } catch (error) {
    return await caches.match(request, {ignoreVary: true}); 
  }
}

//TODO: FAZER FUNCIONAR PAG 123 (11.2)