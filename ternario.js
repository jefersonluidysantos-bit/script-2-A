const idadeMinima = 18;
const idadeCliente = 19;

if(idadeCliente >= idadeMinima){
    console.log("pode beber cerveja");
}else{
    console.log("pode beber suco");
}
console.log(idadeCliente >= idadeMinima?
    "pode beber cerveja":"pode beber suco ");
