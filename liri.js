require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var inquirer = require("inquirer");

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

