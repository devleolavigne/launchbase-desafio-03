const express = require("express");
const nunjucks = require("nunjucks");
const cursos = require("./data");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server,
  noCache: true
});
server.get("/", (req, res) => {
  return res.render("cursos", { cursos });
});
server.get("/cursos/:id", (req, res) => {
  const id = req.params.id;
  const curso = cursos.find(curso => {
    if (curso.id == id) {
      return true;
    }
  });
  if (!curso) {
    return res.render("not-found");
  }
  return res.render("curso", { curso });
});
server.get("/sobre", (req, res) => {
  return res.render("sobre");
});
server.use(function(req, res) {
  res.status(404).render("not-found");
});
server.listen(3333);
