Pong Game

This repository contains a simple implementation of the classic Pong game using JavaScript and HTML5 Canvas. The game includes a player-controlled paddle and an AI-controlled paddle. The player can control the speed of the game and toggle a dark mode for the game interface.


Files:

- pong.html: This is the main HTML file that contains the structure of the game interface. It includes a start menu with a start button, a dark mode toggle button, and a speed changer dropdown. The game is displayed on a canvas element.

- pong.js: This is the main JavaScript file that contains the game logic. It includes functions for drawing and moving game elements, handling user input, and managing game state.

- server.js: This is a simple Express server that serves the game files.
Game Elements

- Paddles: There are two paddles, one controlled by the player (using mouse movement) and the other controlled by a simple AI that follows the ball.

- Ball: The ball moves across the screen and bounces off the paddles and the top and bottom edges of the screen.

- Scores: The scores of the player and the AI are displayed on the screen.


Game Features:

- Dark Mode: The player can toggle a dark mode for the game interface.

- Speed Changer: The player can change the speed of the game using a dropdown menu.

- Start/Reset Game: The player can start a new game using the start button. The game can be reset by pressing the Escape key.
Running the Game

To run the game, start the Bun server using the command "bun server.js" and open your browser to http://localhost:3000.


Contributing:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
License


