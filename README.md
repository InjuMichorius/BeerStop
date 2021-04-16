# BeerStop
![](https://github.com/InjuMichorius/BeerStop/blob/main/public/img/documentation/drinking%20game%20%E2%80%93%204.jpg)
BeerStop is a school project I made where friends can play a (Dutch) drinking game with cards. The project is focused on the principle "real-time", meaning the users can see each other's actions live. I'll be using socket.io for this.

[Click here for the live demo](https://beerstop.herokuapp.com/)

## Goal
The goal of BeerStop is to provide groups of friends a joyfull experience during quarataine. It's a Dutch drinking game called "bussen", where people play a few rounds of lucky guesses to obtain 4 cards. When every player has 4 cards, the real game begins and players can lay their cards on the christmas tree!

For a full explanation on the game, visit the rules here [work in progress](https://github.com/InjuMichorius/BeerStop/wiki/Wireflow)

## Dataflow
Explanation and visual representation of data flow, coming soon.

## SWAPI API
Explanation and visual representation of the used api, coming soon.

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
### Setting up the database
This is the structure of the database:
```
{
  _id: ObjectId("6066e6fd9133894abc78bdf9")
  User: "Inju Michorius"
  Score: 1900
}
```

It will look like this in compass:
![]()

### Testing
To test if the application works you can type the command below. If the application works, the terminal should say: Example app listening at: http://localhost:3000
```js
npm run dev
```
To test if you've correctly connected to the database you can go to the account page by typing http://localhost:3000 in your browser. Once on this page, you can fill in the form and send it. If it shows in the database, you've correctly connected. You can use Compass for easy visual acces to your database.

## Feature wishlist / backlog
- [X] Drink!


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
