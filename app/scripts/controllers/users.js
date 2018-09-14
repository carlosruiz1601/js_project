/**
 * Función para agregar toda la logica de la administración 
 * usuarios
 */

function usersActionsController() {
    //tu código aquí.  
    //Prueba.
    i=0;

    agregar = document.getElementById("add");

    agregar.addEventListener("click", function agregar() {
        var id = document.getElementById("id").value;
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var cons = i++;

        users.push({ cons: cons,id: id, nombre: nombre, apellido: apellido });

        document.getElementById("id").value="";
        document.getElementById("nombre").value="";
        document.getElementById("apellido").value="";
        
        //alert(JSON.stringify(users));//-----Impresion JSON
        agregarData();
    });


    function agregarData() {

        var dataTabla = document.getElementById("tabla1");
        var row = document.createElement("tr");
        var limite = users.length;

        var cell = document.createElement("td");
        var cellText = document.createTextNode(users[limite - 1].cons);

        var cell0 = document.createElement("td");
        var cellText0 = document.createTextNode(users[limite - 1].id);

        var cell1 = document.createElement("td");
        var cellText1 = document.createTextNode(users[limite - 1].nombre);

        var cell2 = document.createElement("td");
        var cellText2 = document.createTextNode(users[limite - 1].apellido);


        cell.appendChild(cellText);
        cell0.appendChild(cellText0);
        cell1.appendChild(cellText1);
        cell2.appendChild(cellText2);
        row.appendChild(cell);
        row.appendChild(cell0);
        row.appendChild(cell1);
        row.appendChild(cell2);


        dataTabla.appendChild(row);

    }


}