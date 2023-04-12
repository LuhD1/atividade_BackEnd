const express = require("express");
const colors = require("colors");
const alunos = require("./alunos");

const app = express();
app.use(express.json()); 

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
  res.status(201).json(novoCadastro);
});

app.listen(3000, () => {
  console.log(
    "Servidor rodando com sucesso".green +
      " | Code by:" +
      " D A M A S".trap.america
  );
});
