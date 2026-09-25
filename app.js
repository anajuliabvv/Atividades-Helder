import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

const tarefas = [
  { id: 1, titulo: "Estudar Express", concluida: false },
  { id: 2, titulo: "Fazer atividade", concluida: true },
  { id: 3, titulo: "Testar API", concluida: false },
];

app.get("/", (req, res) => {
  res.send("API de Tarefas no ar");
});

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando http://localhost:${PORT}`);
});