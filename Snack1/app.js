let inputsNumber=document.getElementById("inputNumber");


let printHtml= document.querySelector(".text-center")
let button=document.getElementById("bottone")


button.addEventListener("click", function(){
    let x =parseInt(inputsNumber.value);
 if(x%2 ==0){
    printHtml.innerHTML=`<h1>Il tuo numero è pari: ${x} </h1>`
}
else{
    printHtml.innerHTML=`<h1>Il tuo numero, ${x}, è dispari per cui stampiamo il successivo: ${x+1}  </h1>`
}
   
})
