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


License:

MIT License

Copyright (c) 2023 plyght

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.