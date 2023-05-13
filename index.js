const form = document.getElementById('myForm');
const inputs = {
  nombre: {
    element: document.getElementById('nombre'),
    error: document.getElementById('nombreError'),
    regex: /^[a-zA-Z\s]+$/
  },
  correo: {
    element: document.getElementById('correo'),
    error: document.getElementById('correoError'),
    regex: /^\S+@\S+\.\S+$/
  },
  telefono: {
    element: document.getElementById('telefono'),
    error: document.getElementById('telefonoError'),
    regex: /^\d+$/
  }
};

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  for (const input of Object.values(inputs)) {
    if (!validarInput(input)) {
      isValid = false;
    }
  }

  if (isValid) {
    alert('Formulario enviado correctamente');
    form.reset();
  }
});

function validarInput(input) {
  const value = input.element.value;
  const error = input.error;

  if (!value.match(input.regex)) {
    error.textContent = `Por favor, ingresa un(a) ${input.element.placeholder} válido(a).`;
    return false;
  } else {
    error.textContent = '';
    return true;
  }
}
