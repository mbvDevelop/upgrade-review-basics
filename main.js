// Iteracion 1
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
let categories = []
for (movie of movies) {
    for (category of movie.categories) {
        if (!categories.includes(category)) {
            categories.push(category)
        }
    }
}
 
console.log(categories)

 
// Iteration 2
 
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let sum = 0
let count = 0
for (user of users) {
    console.log(user)
    for(sound in user.favoritesSounds) {
        console.log(user.favoritesSounds[sound].volume)
        sum += user.favoritesSounds[sound].volume
        count++
    }
}
let average = sum /  count
console.log(average)

// Iteration 3
 
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
 
let songCount = []
for (user of users) {
    for (sound in user.favoritesSounds) {
        songCount.push({sound: sound, count: 0})
    }
}
 
console.log(songCount)
if (songCount.includes({sound: "waves", count: 0})) {
    console.log("auuuu")
}

// let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
 
function findArrayIndex(array, text) {
    let position = 0
    for (item of array) {
        if (item === text) {
            return position
        }
        position++
    }
}
 
console.log(findArrayIndex(array, "Mosquito"))

// Iteracion 5
 
function rollDice(faces) {
    return Math.floor((Math.random() * faces ) + 1)
}
 
console.log(rollDice(6))
