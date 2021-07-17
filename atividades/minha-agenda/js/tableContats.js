const table = document.querySelector("#tabelaContatos");

export function addContato(name, cellphone){
  const tr = document.createElement('tr'); 
  tr.innerHTML =` 
      <td>${name.value}</td>
      <td>${cellphone.value}</td>
      <td>
      <button	class="btn	btn-danger	btn-sm">
      Excluir
      </button>
      </td>
      `
  table.append(tr); 
}

table.onclick = (e) => {
  let classDenger = e.target.classList.contains("btn-danger");
  if(classDenger){
    e.target.closest("tr").remove();
  }
};
