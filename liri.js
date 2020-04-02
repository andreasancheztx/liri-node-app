require('dotenv').config()
var keys = require("./keys.js");
// console.log("running liri")
// console.log(process.argv)
var command = process.argv[2]
console.log(command)


if (command === "spotify-this-song") {
    console.log('get songs')
} else if (command === "movie-this") {
    console.log("find movie")
}