var numero1=parseInt(prompt('ingresar el primer número'));
var total = 0;
var agregar= document.querySelector('.agregar')
for(var i = 1; i <= numero1; i++){
    total = total + i;
    console.log(total)
    agregar.innerHTML += total +"<br>" ;
}














