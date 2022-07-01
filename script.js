function add (numero1,numero2){
     return numero1+numero2;
}



function multiply(numero1, numero2) {
     let mult =0;
    for(let i=1; i<=numero2;i++){
        mult+=numero1;
   }
   return mult;
}




function power(base,expoente) {
    
    let multiplicacao= 1;
    for(let i=1; i<=expoente; i++){
        multiplicacao= multiply(multiplicacao,base);
    }
    let potencia = multiplicacao;
    return potencia;
}



function factorial (numero){
    let total=1;
    for(i=1;i<=numero;i++){
        total = multiply(total,i);
      }
    let fatorial = total;
    return fatorial;
        
}



function fibonacci(numb) {
    let arrayFib =[];
    for(i=0; i<=numb; i++){
        if(i==0){
            arrayFib.push(i);
        }else if(i==1){
            arrayFib.push(i);
        }else{
            arrayFib.push(add(arrayFib[i-2],arrayFib[i-1]))
        }
    }
    let retorno = arrayFib[numb] 
    return retorno;
}
