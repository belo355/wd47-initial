import {addContacto} from './tableContats.js'; 

const form = document.querySelector("#formCadastro");

form.onsubmit = (e) => {
  e.preventDefault();
  let errosMsg = [];

  const name = form.querySelector("#inputNome");
  const cellPhone = form.querySelector("#inputTelefone");

  if (!name.value.trim()) {
    errosMsg.push(name.dataset.msg);
  }else if(!cellPhone.value.trim()) {
    errosMsg.push(cellPhone.dataset.msg);
  }

  if (!errosMsg.length > 0) {
      addContacto(name, cellPhone);
      form.reset(); 

  }else{
      alert(errosMsg);
  }   
};