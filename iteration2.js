//Iteration 2
//2.1
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;
console.log(title,gender,year)

//2.2
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [x, y, z ] = fruits;

console.log(x)
console.log(y)
console.log(z)

//2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
let {name, race} = animalFunction()
console.log(name)

//2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let {name, itv} = car
let [year1, year2, year3] = itv 

console.log(year1)
console.log(year2)
console.log(year3)

