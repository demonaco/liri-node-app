require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var inquirer = require('inquirer');

var fs = require('fs');

var axios = require('axios');

var Spotify = require('node-spotify-api');

var omdbCall = 

var bandsInTownCall =



    start()
function start() {
    console.log("Testing 123")
    mainMenu();
}

function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            message: "Hey there dude! Which rockin' option do you choose?",
            choices: ["Find a show", "Listen to a song", "Search for Film or show", "Leave"]
        }

    ])
        .then(function (userChoice) {
            switch (userChoice.menuChoice) {

                //bands in town function
                case "Find a show":
                    findShow();
                    break;
                //spotify function
                case "Listen to a song":
                    listenSong();
                    break;
                //OMDB function

                case "Search for Film or show":
                    omdbList();
                    break

                //leave

                case "Leave":
                    console.log("Later dude!");

            }
        })
}

//Bands in town API request
function findShow(){
    case concert-this:
    var artist = process.argv[3]
    //API call with artist as part of the URLquery
    var urlQuery = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(resonse) {
        console.log(response.data.venue.name);
        console.log(response.data.venue.city);
        console.log(response.data.datetime);
        })
        .catch(function(error){
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
function listenSong(){
    case spotify-this-song:
    var song = process.argv[3]
    //API call with artist as part of the URLquery
// axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=834c9300").then(function(resonse) {
    // spotify.search({
    //     type: 'track',
    //     query: song
    // })
    // .then(function(response) {
    //     console.log(response);
    // })
    // .catch(function(err) {
    //     console.log(err);
    // });
 spotify.search({ type: 'artist OR album OR track', query: song, limit: 20 }, callback);
 console.log("response.data")
spotify.request("https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx")
.then(function(data) {
    console.log(data);
})
.catch(function(err) {
    console.error('Error occured: ' + err);
});
// }
//OMBD call

function omdbList(){
    case movie-this:
    var movieName = process.argv[3]
    //API call with movie as part of the URLquery
    var urlQuery = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=834c9300"
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=834c9300").then(function(resonse) {
    console.log(response.data.title);
    console.log(response.data.year);
    console.log(response.data.imdbRating);
    console.log(response.data.ratings[1]);
    console.log(response.data.country);
    console.log(response.data.language);
    console.log(response.data.plot);
    console.log(response.data.actors);
    })
    .catch(function(error){
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

//Axios calls




//liri do-what-it-says

fs.readFile("random.txt", "utf8", function (error, data){

    if (error) {
        return console.log (error);
    }

    console.log(data);
   var dataArr = data.split(",");
});