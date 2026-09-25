import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("API de Tarefas no ar");
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando http://localhost:${PORT}`);
});