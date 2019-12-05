require("dotenv").config();

var keys = require("./keys.js");

var fs = require('fs');

var axios = require('axios');

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var directory = process.argv[2];

var media = process.argv.slice(3).join(" ");


//     start()
// function start() {
//     console.log("Hi welcome to your media consumption app!")
//     mainMenu();
// }

switch (directory) {
    //bands in town function
    case "Find-a-show":
        findShow(media);
        break;
    //spotify function
    case "spotify-this-song":
        listenSong(media);
        replacesong();
        break;
    //OMDB function

    case "Search-for-Film-or-show":
        omdbList(media);
        mrNobody();
        break;

    //default to Backstreet Boys
    case "do-what-it-says":
        backstreetsback();
        break;


    //leave

    case "Leave":
        console.log("Later dude!");

}



//Bands in town API request
function findShow(artist) {
    console.log(artist)
    //API call with artist as part of the URLquery
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        for (var i = 0; i < response.data.length; i++)
            console.log(response.data[i].venue);
        console.log(response.data[i].datetime);

    })
        .catch(function (error) {
            if (error.response) {
                console.log("--------Data-----");
                console.log(error.response.data);
                console.log("--------Status------");
                console.log(error.response.status);
                console.log("------Status-----");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        })
}

//Spotify song request
function listenSong(song) {

    spotify.search({ type: "track", query: song, limit: 20 }).then(function (response) {
        console.log(response.tracks.items[0].artists);
        console.log(song);
        console.log(response.tracks.items[0].external_urls);
        console.log(response.tracks.items[0].album.uri);
    }).catch(function (error) {
        if (error.response) {
            console.log("--------Data-----");
            console.log(error.response.data);
            console.log("--------Status------");
            console.log(error.response.status);
            console.log("------Status-----");
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    })
}

    function replacesong() {
        if (process.argv[3] == undefined);
        // if (song == NaN || song == null || song == "" || song == undefined) {
            listenSong("The sign ace of base")
        }
    

        //OMBD call

        function omdbList(media) {

            //API call with movie as part of the URLquery
            axios.get("http://www.omdbapi.com/?t=" + media + "&y=&plot=short&apikey=834c9300").then(function (response) {
                console.log(response.data.Title);
                console.log(response.data.Year);
                console.log(response.data.Ratings[0]);
                console.log(response.data.Ratings[1]);
                console.log(response.data.Country);
                console.log(response.data.Language);
                console.log(response.data.Plot);
                console.log(response.data.Actors);
            })
                .catch(function (error) {
                    if (error.response) {
                        console.log("--------Data-----");
                        console.log(error.response.data);
                        console.log("--------Status------");
                        console.log(error.response.status);
                        console.log("------Status-----");
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log("Error", error.message);
                    }
                    console.log(error.config);
                })

            function mrNobody() {
                if (process.argv[3] == "undefined")
                    mrNobody("Mr. Nobody");
            }
        }

        //liri do-what-it-says
        function backstreetsback() {
            return fs.readFile("random.txt", "utf8", function (error, data) {
                if (error) {
                    return console.log(error);
                }
                // console.log(data.split(",")[1]);
                listenSong(data.split(",")[1]);
            })
        }