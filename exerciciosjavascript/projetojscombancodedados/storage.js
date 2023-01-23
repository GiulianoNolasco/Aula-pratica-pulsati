function StorageService(origin) {
  const get = function () {
    var dados = localStorage.getItem(origin);
    var dadosConvertidos = JSON.parse(dados);
    return dadosConvertidos;
  };
  const save = function (dados) {
    let dadosConvertidos = JSON.stringify(dados);
    localStorage.setItem(origin, dadosConvertidos);
  };

  const remove = function (id) {
    let itensSalvos = get();
    let filtrado = itensSalvos.filter(function (valor) {
      if (valor.id != id) {
        return valor;
      }
    });
    save(filtrado);
  };

  const update = function (dados) {
    let itensSalvos = get();
    itensSalvos.forEach(function (valor, index) {
      if (valor.id == dados.id) {
        itensSalvos[index] = dados;
      }
    });
    save(itensSalvos)
  };

  return { get, save, remove, update};
}
