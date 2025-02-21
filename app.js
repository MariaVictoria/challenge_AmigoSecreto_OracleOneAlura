    /* Con esta función manejamos el subtítulo */
    function asignarTextoElemento() {
        let subtitulo = document.querySelector('h2'); // Selecciona el primer elemento <h2> en el documento
        subtitulo.innerHTML = 'Escribe el nombre de tus amigos, para descubrir quién es el amigo 🤫 ! '; // Cambia el contenido del <h2> a "Escribe el nombre de tus amigos"
    }
    asignarTextoElemento(); // Llama a la función para ejecutar el cambio de subtítulo

    /* Con esta función manejamos el movimiento del título */
    document.querySelectorAll('.zigzag').forEach((span, index) => {
        span.style.setProperty('--index', index + 1); // Asigna un valor al estilo CSS personalizado '--index' para cada elemento '.zigzag', basado en su posición
    });

    let listaAmigos = []; // Array para almacenar los amigos ingresados
    let amigosSorteados = []; // Array para almacenar los amigos ya sorteados

    // Función para agregar amigos a la lista
    function agregarAmigo() {
        const amigoInput = document.getElementById('amigo'); // Obtiene el valor del campo de entrada de amigo
        const nombre = amigoInput.value.trim(); // Elimina los espacios en blanco antes y después del nombre

        if (nombre === "") { // Si el nombre está vacío
            alert("Por favor, ingresa un nombre válido."); // Muestra un mensaje de alerta
            return; // Sale de la función sin hacer nada
        }

        listaAmigos.push(nombre); // Agrega el nombre a la lista de amigos
        mostrarListaAmigos(); // Actualiza la lista mostrada en la página
        amigoInput.value = ''; // Limpia el campo de entrada
        amigoInput.focus(); // Reenfoca el campo de entrada

    }

    // Función para mostrar la lista de amigos
    function mostrarListaAmigos() {
        const listaElement = document.getElementById('listaAmigos'); // Obtiene el contenedor de la lista de amigos
        listaElement.innerHTML = ''; // Limpia la lista actual

        listaAmigos.forEach(amigo => { // Recorre cada amigo en la lista
            const li = document.createElement('li'); // Crea un nuevo elemento <li> para cada amigo
            li.textContent = amigo; // Establece el nombre del amigo como texto dentro del <li>
            listaElement.appendChild(li); // Añade el <li> al contenedor de la lista
        });
    }

    // Función para eliminar un amigo de la lista
    function eliminarAmigo() {
        const amigoInput = document.getElementById('amigo'); // Obtiene el valor del campo de entrada de amigo
        const nombre = amigoInput.value.trim(); // Elimina los espacios en blanco antes y después del nombre

        if (nombre === "") { // Si el nombre está vacío
            alert("Por favor, ingresa un nombre válido."); // Muestra un mensaje de alerta
            return; // Sale de la función sin hacer nada
        }

        const index = listaAmigos.indexOf(nombre); // Busca el índice del amigo en la lista

        if (index > -1) { // Si el amigo está en la lista
            listaAmigos.splice(index, 1); // Elimina el amigo de la lista
            mostrarListaAmigos(); // Actualiza la lista mostrada en la página
            amigoInput.value = ''; // Limpia el campo de entrada
            amigoInput.focus(); // Reenfoca el campo de entrada
        } else { // Si el amigo no está en la lista
            alert("El amigo no está en la lista."); // Muestra un mensaje de alerta
        }
    }

    // funcion para deshabilitar el boton de sortear una vez sorteado
    function deshabilitarSortear() {
        const buttonDraw = document.getElementById('button-draw');
        buttonDraw.disabled = true; // Deshabilita el botón de sortear
    }

    // Función para realizar el sorteo
    function sortearAmigo() {
        // Verifica si hay al menos 2 amigos en la lista
        if (listaAmigos.length < 2) {
            alert("Agrega al menos 2 amigos a la lista para sortear."); // Muestra una alerta si no hay suficientes amigos
            return; // Sale de la función sin hacer nada
        }
    
        // Verifica si ya se ha realizado un sorteo
        if (amigosSorteados.length > 0) {
            alert("Ya se ha realizado el sorteo."); // Muestra una alerta si el sorteo ya se realizó
            return; // Sale de la función sin hacer nada
        }
    
        deshabilitarSortear(); // Deshabilita el botón de sortear
        
        // Elige un amigo aleatorio
        
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Genera un índice aleatorio
        let amigoSorteado = listaAmigos[indiceAleatorio]; // Obtiene el amigo en ese índice
    
        amigosSorteados.push(amigoSorteado); // Marca al amigo como sorteado
    
        // Muestra el resultado del sorteo
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
    
        // Habilita el botón de nuevo sorteo
        const newDrawButton = document.querySelector('.button-new-draw');
        newDrawButton.disabled = false; // Habilita el botón de nuevo sorteo
    }
    


    // Función para iniciar un nuevo sorteo
    function nuevoSorteo() {
        // Borra el resultado y la lista de amigos
        listaAmigos = []; // Resetea la lista de amigos
        amigosSorteados = []; // Resetea el array de amigos sorteados
        mostrarListaAmigos(); // Actualiza la lista de amigos en la interfaz
        document.getElementById('resultado').innerHTML = ''; // Limpia el resultado del sorteo

        // Deshabilita el botón de nuevo sorteo
        document.querySelector('.button-new-draw').disabled = true; // Deshabilita el botón de nuevo sorteo

        // Habilita el botón de sorteo nuevamente
        document.querySelector('.button-draw').disabled = false; // Habilita el botón de sortear
        alert("Listo para un nuevo sorteo"); // Mensaje de confirmación para el nuevo sorteo
    }
