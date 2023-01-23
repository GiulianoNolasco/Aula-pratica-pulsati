const storageService = StorageService("clientes");

function seed() {
  let dados = Array.from({ length: 10 }, function (map, index) {
    let id = index + 1;
    return {
      id: id,
      nome: "Cliente " + id,
    };
  });
  storageService.save(dados);
  this.listaTabela();
}
function getClientes() {
    let dados = storageService.get();
    console.table(dados)
}
function removeClientes(id) {
    id = 1
    storageService.remove(id)    
    /*let dados = storageService.get();
    console.table(dados)*/
}
function updateCliente() {
    let novo = {
        id:7,nome: "joão"
    }
    
    storageService.update(novo)
}

function listaTabela() {
    let tbody = document.getElementById('tbody');

    for (let i = 0; i < this.array.length; i++) {
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();      
        let td_nome = tr.insertCell();      
    }
    
    storageService.update(novo)
}