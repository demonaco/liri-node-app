require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var inquirer = require('inquirer');

var fs = require('fs');

var spotifyApi = 

var omdbApi = 

var bandsInTownApi =


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


function findShow(){
    case concert-this:
    var artist = process.argv[2]
    //API call with artist as part of the URLquery
    var urlQuery = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

}

function listenSong(){
    case spotify-this-song:
    var artist = process.argv[2]
    //API call with artist as part of the URLquery
    var urlQuery =

}

function omdbList(){
    case movie-this:
    var artist = process.argv[2]
    //API call with artist as part of the URLquery
    var urlQuery =

}
//users searches catalogued in random.txt


fs.readFile("random.txt", "utf8", function (error, data){

    if (error) {
        return console.log (error);
    }

    console.log(data);
   var dataArr = data.split(",");
});