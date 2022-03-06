function mostrarSeguro(){
    var tipoSeguro = document.getElementById("seguroId").value
    switch(tipoSeguro){
        case "basico":
            document.getElementById("valorSeguro").innerHTML="$ 500"
            break
        case "intermedio":
            document.getElementById("valorSeguro").innerHTML="$ 1000"
            break;
        case "premium":
            document.getElementById("valorSeguro").innerHTML="$ 1500"
            break;
        default:
            document.getElementById("valorSeguro").innerHTML="$ 1500"
            break;
    }
    console.log(tipoSeguro)
}