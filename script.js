function showAlert(){
    alert("Hola, esta es una alerta desde javascript!");
}
const form = document.getElementById("myForm");

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }
document.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
})

document.querySelector("button.button-menu-toggle")
    addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})