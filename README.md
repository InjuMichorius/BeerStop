# BeerStop
![](https://github.com/InjuMichorius/BeerStop/blob/main/public/img/documentation/drinking%20game%20%E2%80%93%204.jpg)
BeerStop is a school project I made where friends can play a (Dutch) drinking game with cards. The project is focused on the principle "real-time", meaning the users can see each other's actions live. I'll be using socket.io for this.

[Click here for the live demo](https://beerstop.herokuapp.com/)

## Goal
The goal of BeerStop is to provide groups of friends a joyfull experience during quarataine. It's a Dutch drinking game called "bussen", where people play a few rounds of lucky guesses to obtain 4 cards. When every player has 4 cards, the real game begins and players can lay their cards on the so called "christmas tree"!

For a full explanation on the game, visit the rules here [work in progress](https://github.com/InjuMichorius/BeerStop/wiki/Wireflow)

## Dataflow
Explanation and visual representation of data flow, coming soon.

## Deck of Cards API
For this application I used The Deck of Cards API. The API is very well documented on https://deckofcardsapi.com/

The link used to fetch the api is https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1, deck_count means how many card decks are being shuffled. The default is one.

```json
{
    "success": true,
    "deck_id": "d5x0uw65g416",
    "remaining": "42",
    "piles": {
        "player1": {
            "remaining": "3"
        },
        "player2": {
            "cards": [
                {
                    "image": "https://deckofcardsapi.com/static/img/KH.png",
                    "value": "KING",
                    "suit": "HEARTS",
                    "code": "KH"
                },
                {
                    "image": "https://deckofcardsapi.com/static/img/8C.png",
                    "value": "8",
                    "suit": "CLUBS",
                    "code": "8C"
                }
            ],
            "remaining": "2"
        }
    },
}
```


## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Technical requirements
To run this project you'll need [Git](https://git-scm.com/downloads), [MongoDB](https://www.mongodb.com) and any [code editor](https://code.visualstudio.com/download)

### Installing
First you'll need to clone the repository. You can choose a destination by running cd (change directory). You can clone this repository by using clone https://github.com/InjuMichorius/BeerStop.git.

```js
cd [ENTER YOUR PATH HERE]
git clone https://github.com/InjuMichorius/BeerStop.git
```
You also need to install the modules. To do this, you can type npm install in your terminal.

```js
npm install
```

### Testing
To test if the application works you can type the command below. If the application works, the terminal should say: Example app listening at: http://localhost:3000
```js
npm run dev
```
To test if you've correctly connected to the database you can go to the account page by typing http://localhost:3000 in your browser. Once on this page, you can fill in the form and send it. If it shows in the database, you've correctly connected. You can use Compass for easy visual acces to your database.

## Feature wishlist / backlog
Below is a list of features I'd love to add to this application. The features are split up using the **M**o**SC**o**W** method.

**M** - Must haves
_These features are requirements for the end product_
- [x] Custom username
- [x] Different availabe rooms
- [ ] API connection
- [ ] Possibility to see a card and guess the right answer

**S** - Should haves
_These features are wanted, but not necessary for a usable product_
- [ ] Styling that matches the Adobe XD document
- [ ] making users unable to join existing and already playing rooms
- [ ] Set up amount of cards and amount of gulps

**C** - Could haves
_These features can be added if there is enough time to do so_
- [ ] Customize playable character
- [ ] Cool animations to help user experience
- [ ] Sounds/music

**W** - Would haves
_These features can be added in the future_
- [ ] Webcam and microphone acces
- [ ] Account's

## Design patterns and Best Practices
__Code standards are important__ when working on any project; your code stays *consistent* and is *readable* for everyone. I defined code standards for __HTML__, __CSS__ and __JS__ while working on this project.

### Javascript code standards
* Variables & functions are written in __camelCase__
* Promises are handled with __async functions__ using __await__
* I don't use var, only __const__ or __let__
* I put __spaces around operators__ ( = + - * / ) and after commas (exception for for loops)
* I use indentation with __TAB__
* I never end a statement with a __semi-colon;__
* Functions have their opening bracket on the __same line__ as the name, with 1 space in between
* I use __ES6 syntax__ where possible

### CSS code standards
* I try to avoid __!important__ as much as possible
* Layout/general styling is always __above__ more specific styling
* Selectors are not unnecessary __long__ nor __short__
* I use __CSS3 syntax__ where possible
* I avoid old display properties like __float__
* CSS Selectors must have a __space__ between the name and bracket
* I use __global CSS variables__ for more dynamic styling
* 

### HTML code standards
* I only use IDs when the element is present __once__ on a page and it's necessary for styling or Javascript
* I always write semantic HTML according to __W3C Validator__
* Divs are only used when __necessary__ for styling purposes
* Classes allow easy __re-usage__
* Indentation is always __clear__
* Classes are named with a __Hyphen__ when a space is needed

## Packages used
* [Express](https://www.npmjs.com/package/express) - Used to setup the server
* [Body-parser](https://www.npmjs.com/package/body-parser) - Used to refer to html elements
* [Dotenv](https://www.npmjs.com/package/dotenv) - Used to protect sensitive information
* [Ejs](https://www.npmjs.com/package/ejs) - Used for templating
* [Nodemon](https://www.npmjs.com/package/nodemon) - Used for auto refreshing the server
* [Socket.io](https://www.https://socket.io/) - Used to allow users a real-time experience

## License
This project is licensed under the MIT license. See the [LISENCE.md](https://github.com/InjuMichorius/Filmaholic/blob/master/LICENSE) file for details
