# liri-node-app

## Technologies used: Visual Studio Code, Node.JS, NPM, Node Spotify API package, Node Moment.js package, Node Bands in Town API, Node Axios package, Node OMDB package

## Summary: 

The purpose of this application was to develop and put to working use our knowledge of Node.js as a runtime environment to create an application that accepts arguments from the user and returns userful information back, in the form of Spotify, OMDB, and Bands in Town API calls. 

When a user searches for a band artist using the case "Find-a-show" (process.argv[2] in this case) they search for an artist (which is inputted as process.argv[3]) and a list of upcoming concerts for the artist, as well as location, venue and time information (formatted using Moment.js) appears

If a user uses the "spotify-this-song" case, they can enter in a song and information for the song will be provided such as the album, artist, and a preview link to listen to the song.

OMDB's API allows a user to use the case "Search-for-Film-or-show" to find a show or film and see who was in the film, along with other information such as date, language, country, and more.

The "do-what-it-says" case will read the "random.txt" file and use that information as a query search for OMDB via Axios. This will list out information on the Backstreet Boys' single "I want it that way".

If a user fails to put in a search for a spotify song, the song will default to "The Sign" by Ace of Base through a called function that provides this song information as a parameter for the Spotify node API.

If a user fails to put in a search for a film or TV show with OMDB, they will get the results for the movie "Mr. Nobody", as this string will pass into as an argument for a search instead.
 

##Steps: 

1. First I watched class videos from the previous week to review key concepts around Node and API calls.

2. I then reviewed class assignments and code drills to get a better understanding of how the code would be written and how different function calls would work with one another.

3. I placed my Spotify keys in the .env file and had it exported to keys.js. 

4. I installed my Node packages and set them as required variables at the top of liri.js.

3. I set up my case-switch arguments and then started to construct the functions I would need for the APIs. Keywords were assigned to capture a user's search.

4. Once the assignment was coded up, I began the debugging process or working it out piece by piece by using console.log.

5. Along the way I had some assistance from my TA's and my tutor Ryan who all helped along the way steer me in the right direction.

6. I tested each case study one-by-one and worked out kinks until that section was completed before moving onto the next.

7. One of the last aspects I worked on was setting up the default cases to pass arguments for Spotify and OMDB in case the user didn't provide them or if they passed in an invalid search.

Sources: Class videos, TAs, tutor, class assignments, code drills

Screenshots and Gifs of working project:
Searching for film or movie:
![Searching for a film or movie](https://github.com/demonaco/liri-node-app/blob/master/assets/titanic.gif)
Searching for a concert:
![Searching for a show](https://github.com/demonaco/liri-node-app/blob/master/assets/FindaShow.gif)
Default to Backstreet boys:
![Defaulting to Backstreet Boys ](https://github.com/demonaco/liri-node-app/blob/master/assets/backstreetboys.gif)
Default to Ace of Base
![Defaulting to Ace of Base](https://github.com/demonaco/liri-node-app/blob/master/assets/AceofBase.gif)

Switch-case code:
![screenshot of case-switch code](https://github.com/demonaco/liri-node-app/blob/master/assets/Screen%20Shot%202019-12-04%20at%2011.44.13%20PM.png)
Find a show code:
![Find show code](https://github.com/demonaco/liri-node-app/blob/master/assets/Screen%20Shot%202019-12-04%20at%2011.44.25%20PM.png)
Listen to a song code:
![Listen song code](https://github.com/demonaco/liri-node-app/blob/master/assets/Screen%20Shot%202019-12-04%20at%2011.44.36%20PM.png)
OMDB code:
![OMDB API code](https://github.com/demonaco/liri-node-app/blob/master/assets/Screen%20Shot%202019-12-04%20at%2011.44.46%20PM.png)
Backstreet Boys code:
![Backstreet Boys code](https://github.com/demonaco/liri-node-app/blob/master/assets/Screen%20Shot%202019-12-04%20at%2011.44.53%20PM.png)



