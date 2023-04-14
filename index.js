const express = require("express");
const colors = require("colors");
const alunos = require("./data/alunos");
const fs = require("fs");
const morgan = require("morgan");


function novoJson() {
  fs.writeFile("db.json", JSON.stringify(alunos), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Dados salvos em db.json");
  });
}

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/alunos", (req, res) => {
  const nome = req.query.nome;
  const media = Number(req.query.media);

  let listaAlunos = alunos;

  if (nome) {
    listaAlunos = listaAlunos.filter((elemento) =>
      elemento.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }
  if (media) {
    listaAlunos = listaAlunos.filter((elemento) => elemento.media === media);
  }
  novoJson();
  res.json(listaAlunos);
});

app.post("/alunos/novo", (req, res) => {
  const { nome, matricula, media } = req.body;

  if (!nome || !matricula || !media) {
    res.status(400).send("Todos os dados são necessarios!");
    return;
  }
  const novoCadastro = {
    nome: nome,
    matricula: matricula,
    media: media,
  };
  alunos.push(novoCadastro);
  novoJson();
  res.status(201).json(novoCadastro);
});

app.delete("/alunos/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= alunos.length) {
    res.status(400).send("Aluno não válido");
    return;
  }

  const aluno = alunos[index];

  if (!aluno) {
    res.status(404).send("Aluno não encontrado");
  } else {
    alunos.splice(index, 1);
    novoJson();
    res.send("Aluno removido com sucesso");
  }
});

app.put("/alunos/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= alunos.length) {
    res.status(400).send("Aluno não válido");
    return;
  }

  const { nome, media } = req.body;

  if (!nome || !media) {
    res.status(400).send("Dados inválidos");
    return;
  }

  const aluno = alunos[index];

  if (!aluno) {
    res.status(404).send("Aluno não encontrado");
  } else {
    aluno.nome = nome;
    aluno.media = media;
    novoJson();
    res.send("Aluno atualizado com sucesso");
  }
});

app.listen(3000, () => {
  console.log(
    "Servidor rodando com sucesso".green +
      " | Code by:" +
      " D A M A S".trap.america
  );
});
