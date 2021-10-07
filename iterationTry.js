let teams = [
    {
        name: 'newTeam',
        isGood: false,
        titles: 3,
        color: 'White'
    },
    {
        name: 'Mapped',
        isGood: true,
        titles: 1,
        color: 'Blue'
    },
    {
        name: 'Toho',
        isGood: true,
        titles: 1,
        color: 'Black'
    }
]

const teamsMap = teams.map(team => team.name)
console.log(teamsMap)

const teamsFilter = teams.filter(function(good) {
    return good.isGood
})
console.log(teamsFilter)

const teamsFind = teams.find(color => color.color === 'Blue')
console.log(teamsFind)

const teamsReduce = teams.reduce(function (accumulator, title) { 
    return accumulator += title.titles;
}, 0);
console.log(teamsReduce)