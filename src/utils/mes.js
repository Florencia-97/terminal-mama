
const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];

export default function(numMes){
    var pos = numMes -1;
    if (pos === 12){pos = 0}
    return nombresMeses[pos];
}