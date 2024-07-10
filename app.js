const ingreseElTexto1 = document.getElementById("ingreseElTexto");
const mostratext = document.getElementById("mostratext");

const reglasEncriptado = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

// Crear reglas de desencriptado a partir de las reglas de encriptado
const reglasDesencriptado = Object.keys(reglasEncriptado).reduce((obj, key) => {
  obj[reglasEncriptado[key]] = key;
  return obj;
}, {});

// Función para validar texto
const validarTexto = (texto) => {
  const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
  return regex.test(texto);
};

// Función para encriptar texto
const encriptarTexto = (texto) => {
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    if (reglasEncriptado.hasOwnProperty(letra)) {
      textoEncriptado += reglasEncriptado[letra];
    } else {
      textoEncriptado += letra;
    }
  }
  return textoEncriptado;
};

// Función para desencriptar texto
const desencriptarTexto = (texto) => {
  Object.keys(reglasDesencriptado).forEach(key => {
    texto = texto.replaceAll(key, reglasDesencriptado[key]);
  });
  return texto;
};

// Función para copiar texto al portapapeles
const copiarAlPortapapeles = (texto) => {
  const textarea = document.createElement("textarea");
  textarea.textContent = texto;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

// Evento para el botón de encriptar
const botonEncriptar = document.querySelector("#textoEncriptado");
botonEncriptar.addEventListener("click", () => {
  var texto = ingreseElTexto1.value;
  if (!validarTexto(texto)) {
    alert("El texto contiene caracteres inválidos. Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
    return;
  }
  var textoEncriptado = encriptarTexto(texto);
  mostratext.value = textoEncriptado;
  ingreseElTexto1.value = ''; // Limpiar el campo de texto
});

// Evento para el botón de desencriptar
const botonDesencriptar = document.querySelector("#btnDesencriptar");
botonDesencriptar.addEventListener("click", () => {
  var textoEncriptado = mostratext.value;
  if (!validarTexto(textoEncriptado)) {
    alert("El texto encriptado contiene caracteres inválidos. Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
    return;
  }
  var textoDesencriptado = desencriptarTexto(textoEncriptado);
  mostratext.value = textoDesencriptado;
});

// Evento para el botón de copiar texto
const btnCopiarTexto = document.querySelector("#btnCopiarTexto");
btnCopiarTexto.addEventListener("click", () => {
  var textoEncriptado = mostratext.value;
  copiarAlPortapapeles(textoEncriptado);
  alert("Texto encriptado copiado al portapapeles");
});
