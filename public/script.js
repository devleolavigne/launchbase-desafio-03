const cursos = document.querySelectorAll(".curso");

for (let curso of cursos) {
  curso.addEventListener("click", () => {
    const cursoId = curso.getAttribute("id");
    window.location.href = `/cursos/${cursoId}`;
  });
}
