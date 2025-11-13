<!-- Importar JavaScript -->
<script src="script.js"></script>
</body>
</html>
function calcularTrivia() {
let puntaje = 0;
let respuestas = {
  q1: "b", Joaquin Erviti Landriani
  q2: "c", 1999
  q3: "a" cocinero
};
let form = document.getElementById("quizForm");
for (let pregunta in respuestas) {
  let seleccionada = form.querySelector('input[name="'+pregunta+'"]:checked');
  if (seleccionada && seleccionada.value === respuestas[pregunta]) {
    puntaje++;
  }
}
let mensaje = "Tu puntaje es: " + puntaje + " de 3.";
if (puntaje === 3) {
  mensaje += " Perfecto Todo";
} else if (puntaje === 2) {
  mensaje += "Exelente";
} else {
  mensaje += "Vuelve a leer nuestra pagina!";
}