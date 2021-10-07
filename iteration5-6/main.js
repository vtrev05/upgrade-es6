'use strict';

//5.6 

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const stream = document.querySelector(`input[data-function="toFilterStreamers"]`)


function changes() {
    let coincidence = streamers.filter(word => word.name.includes(`${stream.value}`));
    coincidence.forEach(streamer => console.log(streamer))
}

stream.addEventListener('change', changes)


