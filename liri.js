require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var fs = require('fs');

var axios = require('axios');

var Spotify = require('node-spotify-api');

var directory = process.argv[2];

var userSelect = process.argv[3];


// var omdbCall = 

// var bandsInTownCall =



    start()
function start() {
    console.log("Testing 123")
    mainMenu();
}

function mainMenu(directory, userSelect) {
            switch (directory) {
                //bands in town function
                case "Find-a-show":
                    findShow(data);
                    break;
                //spotify function
                case "Listen-to-a-song":
                    listenSong(data);
                    break;
                //OMDB function

                case "Search-for-Film-or-show":
                    omdbList(data);
                    break;

                    //default to Backstreet Boys
                case "do-what-it-says":
                     backstreetsback(data);
                     break;


                //leave

                case "Leave":
                    console.log("Later dude!");

            }
        })


function bandsChoice(){
    var findAShow = process.argv[2];
    var show = process.argv[3];
    var showQuery = process.argv.slice(3).join("");
    console.log("I'm looking for " + showQuery);

}

//Bands in town API request
function findShow(){
    
    var artist = process.argv.slice(3).join("");
    //API call with artist as part of the URLquery
    var urlQuery = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
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
    var song = process.argv.slice(3).join("");
    //API call with artist as part of the URLquery
// axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=834c9300").then(function(response) {
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
// }
//OMBD call

function omdbList(){
    var movieName = process.argv.slice(3).join("");
    //API call with movie as part of the URLquery
    var urlQuery = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=834c9300"
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=834c9300").then(function(response) {
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

//liri do-what-it-says
function backstreetsback(){
    spotify.request("https://api.spotify.com/v1/tracks/")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.error('Error occured: ' + err);
    })
};


//write information over to random.txt
function saveText(){
fs.writeFile("random.txt", userSelect, function (error, data){

    if (error) {
        return console.log (error);
    }

    console.log(data);
   var dataArr = data.split(",");
}
)};