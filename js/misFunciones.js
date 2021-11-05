const URLCloud = "https://g110b96e361558b-db202110242054.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud";
const URLClient = "https://g110b96e361558b-db202110242054.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client";
const URLMessage = "https://g110b96e361558b-db202110242054.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message";



function traerInformacion(){
    $.ajax({
        url:URLCloud,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });
}

//funcion para hacer tabla

function pintarRespuesta(items){
    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable); 
}

//funcion para actualizar

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:URLCloud,
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
}

// funcion para editar la informacion de la base de datos

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:URLCloud,
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha actualizado")
        }
    });
}

//funcion para borrar elementos de la base de datos

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:URLCloud,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado").empty();
            traerInformacion();
            alert("Se ha eliminado")
        }
    });
}

// funcion para client *****************************************************************

function traerInformacionClient(){
    $.ajax({
        url:URLClient,
        type:"GET",
        datatype:"JSON",
        success:function(respuestaClient){
            console.log(respuestaClient);
            pintarRespuestaClient(respuestaClient.items)
        }
    });
}

//funcion para hacer tabla cliente

function pintarRespuestaClient(itemsClient){
    let myTableClient ="<table>";
    for(i=0;i<itemsClient.length;i++){
        myTableClient+="<tr>";
        myTableClient+="<td>"+itemsClient[i].id+"</td>";
        myTableClient+="<td>"+itemsClient[i].name+"</td>";
        myTableClient+="<td>"+itemsClient[i].email+"</td>";
        myTableClient+="<td>"+itemsClient[i].age+"</td>";
        myTableClient+="<td> <button onclick='borrarElementoClient("+itemsClient[i].id+")'>Borrar cliente</button>";
        myTableClient+="</tr>";
    }
    myTableClient+="</table>";
    $("#resultadoClient").append(myTableClient);
}

//funcion para crear cliente

function guardarInformacionClient(){
    let myDataClient={
        id:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        age:$("#ageClient").val(),
    };
    let dataToSendClient=JSON.stringify(myDataClient);
    $.ajax({
        url:URLClient,
        type:"POST",
        data:myDataClient,
        datatype:"JSON",
        success:function(respuestaClient){
            $("#resultadoClient").empty();
            $("#idClient").val("");
            $("#nameClient").val("");
            $("#emailClient").val("");
            $("#ageClient").val("");
            traerInformacionClient();
            alert("se ha guardado el dato")
        }
    });
}

// funcion para editar la informacion de la base de datos cliente

function editarInformacionClient(){
    let myDataClient={
        id:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        age:$("#ageClient").val(),
    };
    console.log(myDataClient);
    let dataToSendClient=JSON.stringify(myDataClient);
    $.ajax({
        url:URLClient,
        type:"PUT",
        data:dataToSendClient,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaClient){
            $("#resultadoClient").empty();
            $("#idClient").val("");
            $("#nameClient").val("");
            $("#emailClient").val("");
            $("ageClient").val("");
            traerInformacionClient();
            alert("se ha actualizado")
        }
    });
}

//funcion para borrar elementos de la base de datos cliente

function borrarElementoClient(idElementoClient){
    let myDataClient={
        id:idElementoClient
    };
    let dataToSendClient=JSON.stringify(myDataClient);
    $.ajax({
        url:URLClient,
        type:"DELETE",
        data:dataToSendClient,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaClient){
            $("resultadoClient").empty();
            traerInformacionClient();
            alert("Se ha eliminado")
        }
    });
}

//Messages
function getMessages() {
    $.ajax({
      url: URLMessage,
      type: "GET",
      datatype: "JSON",
      success: ((response) => {
          loadMessages(response.items)
      }),
    });
}
  
function loadMessages(items){
    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>"; 
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable +="<td> <button onclick='deleteMessage(" + items[i].id + ")'>Borrar</button>";
        myTable +="<td><button onclick='loadMessage(" +items[i].id +")'>Cargar</button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#dataMessage").append(myTable);
}

function deleteMessage(id){
    let myData = {
        id
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: URLMessage,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function () {
            $("#dataMessage").empty();
            getMessages();
            alert("Se ha Eliminado.");
        }
    });
}

function loadMessage(id){
    $.ajax({
        dataType: "json",
        url: URLMessage + "/" + id,
        type: "GET",
        success: function (response) {
            console.log(response)
            $("#idMessage").val(response.items[0].id)
            $("#message").val(response.items[0].messagetext)
        }
    });
}

function post_Message(){
    $.ajax({
        url: URLMessage,
        type: "POST",
        data: {
            id: $("#idMessage").val(),
            messagetext: $("#message").val()
        },
        datatype: "JSON",
        success: function (respuesta) {
            $("#dataMessage").empty();
            $("#idMessage").val("");
            $("#message").val("");
            getMessages();
            alert("se ha guardado el dato");
        }
    });
}

function putMessage(){
    let myData = {
        id: $("#idMessage").val(),
        messagetext: $("#message").val()
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: URLMessage,
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#dataMessage").empty();
            $("#idMessage").val("");
            $("#message").val("");
            getMessages()
            alert("se ha actualizado");
        },
    });
}