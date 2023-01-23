const DATABASE = "teste";
const ls = localStorage.getItem(DATABASE);

let data = ls
  ? JSON.parse(ls)
  : {
      id: 0,
      list: [],
    };

function render() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  data.list
    .sort((a, b) => (a.name < b.name ? -1 : 1))
    .map((iten) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
                        <td>${iten.id}</td>
                        <td>${iten.name}</td>
                        <td>${iten.age}</td>
                        <td>${iten.score}</td>
                        <td>
                            <button onclick='edit(${iten.id}, "${iten.name}")'>EDIT</button>
                            <button class='dell' onclick='deletReg(${iten.id})'>DELETE</button>
                            </td>
            `;
      tbody.appendChild(tr);
    });
}
function add() {
  let nome = "";
  let idade = "";
  let pontuacao = 0;
  if (!(nome = prompt("Informe o nome", nome)));
  if (!(idade = prompt("Informe a idade", idade)));
  pontuacao = prompt("Informe a pontuação", pontuacao);
  data.id++;
  data.list.push({ id: data.id, name: nome, age: idade, score: pontuacao });
  render();
  save();
}
function edit(id, name) {
  if (!(name = prompt("Informe o novo nome", name))) return;
  data.list = data.list.map((iten) => {
    if (iten.id === id) iten.name = name;
    return iten;
  });
  render();
  save();
}

function deletReg(id) {
  if (!confirm("Deseja deletar este registro?")) return;
  data.list = data.list.filter((iten) => iten.id != id);
  render();
  save();
}
function save() {
  localStorage.setItem(DATABASE, JSON.stringify(data));
}

window.addEventListener("load", (e) => {
  render();
});

