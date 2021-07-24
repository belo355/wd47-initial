/** @type {IDBDatabase} */
let db;

const subscribers = [];
const requestDb = indexedDB.open("db_ceep_backup", 1);

requestDb.addEventListener("sucess", () => {
  db = requestDb.result;
  carregarCartoes(); 
});

requestDb.addEventListener("upgradeneeded", () => {
  db = requestDb.result;
  db.createObjectStore("store_cartoes", { keyPath: "id", autoIncrement: true });
});

function carregarCartoes(){
  const tx = db.transaction('store_cartoes'); 
  const request = tx.objectStore('store.cartoes').getAll(); 
  request.onsuccess = () => {
    const listaDeCartoesSaldos = request.result ?? []; 
    subscribers.forEach(funcao => {
      funcao(listaDeCartoesSaldos); 
    }); 
  }
}

export function IDBSubcribeOnLoadCartoes(funcaoCallback){
  subscribers.push(funcaoCallback); 
}

/**
 * Salvar lista de cartoes no mural no banco de dados do navegador
 * @param {Array} listaDeCartoes Array contendo as informaceos dos cartoes 
 * @return {Promise<string>}
 */

export function salvarCartoesStore(listaDeCartoes){
  return new Promise(function(resolve, reject){
    const tx = db.transaction('store_cartoes', 'readwrite'); 
    tx.objectStore('store_cartoes').clear(); 

    for( let cartao of listaDeCartoes){
      tx.objectStore('store_cartoes').add(cartao); 
    }

    tx.oncomplete = () => resolve('Cartões salvos com scesso na base de dados local!')
    tx.onerror = () => reject('Erro ao salvar dados na base de dados local!')
  }); 
}