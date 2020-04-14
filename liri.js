require('dotenv').config()
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
// console.log("running liri")
// console.log(process.argv)
var command = process.argv[2]
var userInput = process.argv[3]
console.log(command)


function getSongs(song) {
    console.log('get songs')
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });
    if (!song) {
        song = 'The Sign'
    }
    console.log(song)

    spotify
        .search({ type: 'track', query: song })
        .then(function (response) {
            var results = response.tracks.items
            // console.log(results);

            if (!userInput) {
                var found = results.filter(function (el) {
                    if (el.artists[0].name === 'Ace of Base') {
                        return el
                    }
                })
                // console.log(found)
                console.log(found[0].name)
                console.log(found[0].album.name)
                console.log(found[0].artists[0].name)
                console.log(found[0].external_urls.spotify)
            } else {

                for (var i = 0; i < results.length; i++) {
                    console.log(results[i].name)
                    console.log(results[i].album.name)
                    console.log(results[i].artists[0].name)
                    console.log(results[i].external_urls.spotify)
                    console.log("*************************")
                }
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}


if (command === "spotify-this-song") {
    getSongs(userInput)

} else if (command === "movie-this") {
    console.log("find movie")
}

