import './view/btnAjuda.js'; 
import './view/btnMudaLayout.js'; 
import './view/mural.js'; 
import './view/fomCartao.js'; 
import './view/btnSync.js'; 
import './view/btnLogout.js'; 

async function registrarServiceWorker(){
  if('serviceWorker' in navigator){
    const registro = await navigator.serviceWorker.register('/projeto/sw.js', {
        updateViaCache: "none"
    })

    console.log('Service Worker registraado:', registro)
  }
}

registrarServiceWorker(); 