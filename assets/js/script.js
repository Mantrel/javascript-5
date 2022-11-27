const btn = document.querySelector('#agregar')
const arregloTarea = [];
let ultimeId = 1;

// Eliminar elemento de la lista //
const eliminarTarea = function (idTarea) {
    const posicion = arregloTarea.findIndex((e) => e.id == idTarea);

    if (posicion >= 0) {
        arregloTarea.splice(posicion, 1);

        dibujaLista();
    }
}

const tareaMarcada = function(idTarea) {
    const posicion = arregloTarea.findIndex((e) => e.id == idTarea);

    // Si es "false" la cambio a "true" y viceversa //
    if (arregloTarea[posicion].realizada == true)
    arregloTarea[posicion].realizada = false;
    else if (arregloTarea[posicion].realizada == false)
    arregloTarea[posicion].realizada = true

    dibujaLista();
}

const dibujaLista = function () {
    const listaTareas = document.querySelector('#listaTareas'); 

    // Tabla datos //
    let htmlElementosLista = `
    <thead>
        <tr>
            <th>ID</th>
            <th>Tareas</th>
            <th></th>
        </tr>
    </thead>
    <tbody>`;

    // Tareas //
    for (const tarea of arregloTarea) {
        if (tarea.realizada) {
            statusCheck = 'checked';
        } else {
            statusCheck = '';
        }
        htmlElementosLista += `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.nombre}</td>
            <td><input type="checkbox" ${statusCheck} onclick="tareaMarcada(${tarea.id})"> <button class="btn btn-danger" onclick="eliminarTarea(${tarea.id});">Eliminar</button></td>
        </tr>`;
    }
    htmlElementosLista += '</body>';

    listaTareas.innerHTML = htmlElementosLista;
    document.querySelector('#totalTareas').innerHTML = arregloTarea.length;

    const arregloTareaRealizadas = arregloTarea.filter((e) => e.realizada == true);

    console.log(arregloTareaRealizadas);
    document.querySelector('#tareasRealizadas').innerHTML = arregloTareaRealizadas.length;

}

btn.addEventListener("click", function () {
    const nombreTarea = document.querySelector('#nombreTarea').value;
    const id = ultimeId;
    const realizada = false;

    const tarea = {
        id: id,
        nombre: nombreTarea,
        realizada: realizada
    }

    arregloTarea.push(tarea);

    dibujaLista();

    ultimeId++;
});
