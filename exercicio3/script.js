/*Crie um array com 5 strings. Faça um programa que percorra este 
array e imprima as strings em formato de ranking, como no exemplo abaixo:


**Utilize o for...of para resolver**
```jsx*/


//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
let indice = 0;
for (let i of maioresPaises){
    indice ++
    console.log(`${indice} - ${i}`)
}


/*ou
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
for (pais of maioresPaioses){
    console.log(`${maioresPaises.indexOf(pais)} - ${pais}`)
}