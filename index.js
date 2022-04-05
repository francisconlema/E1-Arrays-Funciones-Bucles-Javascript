
// E1: Arrays, Funciones, Bucles | Javascript


const pizza = [`masa`,`harina`,`agua`,`aceite`,`levadura`,`sal`,`oregano`,`tomate`,`condimentos`,`jamon`,];

console.log(`ingedientes ${pizza}`)

function parImpar(arr){
    let par = [];
    let impar = [];
    for (let i = 0;i<arr.length;i++){
        if(arr[i].length%2==0){par.push(arr[i])}
        else{impar.push(arr[i])}
        console.log(`Los ingredientes pares son: ${par}`);
        console.log(`Los ingredientes impares son: ${impar}`);

    }
    

}

parImpar(pizza)
