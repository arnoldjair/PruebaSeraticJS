/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function abrir() {

    abrirArchivo(function (data) {
        var data = JSON.parse(data);
        var table = document.getElementById("table");
        var rows = table.rows.length;
        console.log(data.arrayColores.length);
        data.arrayColores.forEach(function (item, index) {
            var row = table.insertRow();
            var cNombre = row.insertCell(0);
            cNombre.innerHTML = item.nombreColor;
            var cNombre = row.insertCell(1);
            cNombre.innerHTML = item.valorHexadec;
        });
    });

}

function abrirArchivo(callback) {
    var obj = new XMLHttpRequest();
    obj.overrideMimeType("application/json");

    /**
     void open(
     in AUTF8String method,
     in AUTF8String url,
     [optional] in boolean async,
     [optional] in AString user,
     [optional] in AString password
     );
     */
    obj.open('GET', 'archivo.json', true);

    obj.onreadystatechange = function () {
        if (obj.readyState === 4 && obj.status === 200) {
            callback(obj.responseText);
        }
    };
    obj.send(null);
}