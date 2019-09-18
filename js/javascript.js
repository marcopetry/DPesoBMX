function carregarFotos()













function adicionaLinha(){
    $("table").append("<tr> <td>"+ $("#Campo1").val()+" </td> <td> "+$("#Campo2").val()+" </td> </tr>");
} 

$("#Add").attr("onclick", "adicionaLinha()");

