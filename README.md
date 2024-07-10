# Encriptador y Desencriptador de Texto

Este proyecto te permite transformar texto mediante encriptación y luego revertir el proceso usando reglas predefinidas definidas en el código.

## Funcionalidades

1. **Encriptar Texto:**
   - Ingresa cualquier texto en el campo de entrada.
   - Haz clic en el botón "Encriptar".
   - El texto ingresado se transformará según reglas predefinidas.

2. **Desencriptar Texto:**
   - Ingresa el texto encriptado en el campo de resultado.
   - Haz clic en el botón "Desencriptar".
   - El texto encriptado se revertirá a su forma original usando reglas inversas.

3. **Copiar Texto Encriptado:**
   - Después de encriptar texto, puedes copiar el resultado haciendo clic en "Copiar Encriptado".

## Reglas de Transformación

El proceso de encriptación sustituye letras específicas por palabras definidas en el objeto `reglasEncriptado`. Por ejemplo:
- 'e' se convierte en 'enter'
- 'i' se convierte en 'imes'
- 'a' se convierte en 'ai'
- 'o' se convierte en 'ober'
- 'u' se convierte en 'ufat'

## Requisitos de Entrada

- Solo se permiten letras minúsculas sin acentos ni caracteres especiales en el texto de entrada para encriptar o desencriptar.
- Si se ingresan caracteres no permitidos, se mostrará una alerta y la operación no se realizará.

## Tecnologías Utilizadas

- **HTML:** Define la estructura básica de la página web y los elementos interactivos.
- **CSS:** Estiliza la apariencia visual de la interfaz de usuario para una experiencia agradable.
- **JavaScript:** Maneja la lógica de encriptación, desencriptación e interacción con el usuario.

## Instrucciones de Uso

1. **Descarga:** Descarga los archivos `app.js`, `global.css` y `styles.css`.
2. **Ejecución:** Abre el archivo HTML en tu navegador web.
3. **Interacción:** Ingresa texto, encripta, desencripta y copia el resultado según sea necesario.

¡Explora cómo funciona este proyecto interactivo de encriptación y desencriptación de texto!

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
