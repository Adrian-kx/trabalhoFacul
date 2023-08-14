const textElement = document.getElementById("title");
const text = "Desenvolvedor Front-End";
let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 150); // Velocidade da digitação em milissegundos
  }
}

typeText();
