# Dice Game
A dice game made in React + redux

## Rules of the game.
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game.

## 1. Install node and npm.
* Go to [node.js](https://nodejs.org/en/) and download the lastest version of node.
* Go to your bash and write `node -v`and `npm -v` it should show the version of each one.

## 2. Install dependencies
- To install all the dependencies go to your bash and write:
```
npm install
```
(this will install all the dependencies)

## Start
To start the local deploy and run the server go and write in your bash
```
npm start
```

## Test (unit testing)
To start the unit testing write in your bash
```
npm test
```
