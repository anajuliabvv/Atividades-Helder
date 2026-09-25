import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

const tarefas = [
  { id: 1, titulo: "Estudar Express", concluida: false },
  { id: 2, titulo: "Fazer atividade", concluida: true },
  { id: 3, titulo: "Testar API", concluida: false },
];

app.get("/tarefas/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const tarefa = tarefas.find((tarefa) => tarefa.id === id);

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada",
    });
  }

  res.json(tarefa);
});

app.get("/tarefas", (req, res) => {
  const { concluida } = req.query;

  if (concluida !== undefined) {
    const resultado = tarefas.filter(
      (tarefa) => tarefa.concluida === (concluida === "true")
    );

    return res.json(resultado);
  }

  res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;

  if (!titulo || typeof titulo !== "string") {
    return res.status(400).json({
      erro: 'O campo "titulo" é obrigatório e deve ser uma string',
    });
  }

  const novaTarefa = {
    id: tarefas.length + 1,
    titulo,
    concluida: false,
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

app.get("/", (req, res) => {
  res.send("API de Tarefas no ar");
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando http://localhost:${PORT}`);
});