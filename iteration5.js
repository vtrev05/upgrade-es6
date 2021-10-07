//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesFiltered = ages.filter(function(age){
    return age > 18  
})
console.log(agesFiltered)

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesFiltered2 = ages2.filter(function(age){
    return age % 2 === 0  
})
console.log(agesFiltered2)

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

/* const streamersLol = streamers.filter(function(game){
    return game.gameMorePlayed === 'League of Legends'  
})
console.log(streamersLol) */

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.


/* const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersU = streamers2.filter(function(name){
    return name.name.includes('u')
})
console.log(streamersU) */

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.
 
const newStreamersList = streamers.filter(function(legend){
    return legend.gameMorePlayed.includes('Legends') 
})

const olderStreamers = newStreamersList.map((legend) => {
    return legend.age > 35 ? legend.gameMorePlayed.toUpperCase() : legend.gameMorePlayed
})

console.log(newStreamersList)
console.log(olderStreamers)


//FALTA 5.6 Y 5.7