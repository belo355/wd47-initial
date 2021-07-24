let usuarioLogado = localStorage.getItem('CEEP_USUARIO_LOGADO'); 

while(!isEmail(usuarioLogado)){
  usuarioLogado = prompt('Por favor, informe um nome de usuario valido')
  localStorage.setItem('CEEP_USUARIO_LOGADO', usuarioLogado); 
}

function isEmail(email){
  return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email); 
}

export function logout(){
  localStorage.removeItem('CEEP_USUARIO_LOGADO'); 
  window.location.reload(); 
}

export default usuarioLogado; 