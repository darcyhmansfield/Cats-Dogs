# Project 0 - Cats & Dogs

This simple game can be played [here](https://darcyhmansfield.github.io/Cats-Dogs/).

This is a modified Tic Tac Toe game that uses images of cats and dogs instead of noughts and crosses. It is comprised of a html file with corresponding css style file, along with various JavaScript files including jQuery. 

## Game Description
Tic Tac Toe is a two-player game (one of them being played by computer or human). In this game, there is a board with 3 x 3 squares.

The two players take turns putting marks on a 3x3 board. The goal of Tic Tac Toe game is to be one of the players to get three of the same symbols in a row - horizontally, vertically or diagonally on a 3 x 3 grid. The player who first gets 3 of his/her symbols (marks) in a row - vertically, horizontally, or diagonally wins the game, and the other loses the game. The game can be played by two players or using an AI to control the Cats turn. 

## HTML

This file defines the base html of the site with various headings and paragraph sections for the text in the header. The label section defines the checkbox for the AI function. 

The grid is formed using the 9 box divs set out in the container div, with id's corresponding to the placement of the box within the grid (from 0 to 8 going from left to right and then down a row). The modal div defines the pop up box that appears when someone has won a game, and will show the overall scores. 

## Rules

This js file defines the base rules and functions for the game (the basic logic). The arrays include an empty starting array for input of 'x' and 'o' at 9 spots, the winArray defining the various ways to win a game. All spots of a winning array will have to be filled by the same sign in order for a win to occur. 

The functions use inputs from the main js file (tictactoe.js) to find out whether the chosen box has a sign in it already, to insert a sign into the chosen box, to find out if the grid is full, and to determine if a winning condition haas been met. There are also a few counters at the end of the script to keep track of the total wins for the modal. 

## TicTacToe

## AI

(Not yet finalised.)

This js file defines the rules of the Cat AI using a brute force approach. 

The checkFirst function checks which box was chosen in the first move, as it will define the best box for a counter-move. 

A few arrays are defined to break up the grid into various types including corner boxes and the center box. 

The check2Box function iterates through winArray to see if any of the winning arrays have two boxes taken up by the same sign. This is used the in

### Numbered Lists

1. Grouccho
1. Harpo
1. Chico

## Links

This is [a link to the W3C](link).

## Images

![a fluffy kitten](link)

## Code Formatting

The jquery library uses the `$` variable. This is the `monospace` font. Have you tried `console.log`?

Here is an example of a function in JS:

```javascript
const fjdskl = function() {
    console.log('fdj');
}
```
