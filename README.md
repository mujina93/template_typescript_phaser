# Template for Phaser CE project in typescript, with nodejs server
## Usage
### Setup
Install visual studio code [here](https://code.visualstudio.com/)
Install node and npm [here](https://nodejs.org/en/)
Install typescript by opening a terminal and
```
npm install -g typescript
```
Install node static either globally
```
npm install -g node-static
```
or locally
```
npm install node-static
```
### Launch
Press *F5* in visual studio code, and the server will run.
Visit *localhost:8080* in a browser, and you will see your game!

## Structure

### Typescript

You can write the source code for your game in [typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), a javascript extension which supports types, classes, ES\*, and compiles to plain ol' javascript.
Keep your typescript source code into *src* folder.
Then compile with *Ctrl+Shift+B*. 
Information about your compiler are in the files *tsconfig.json* and in *.vscode/tasks.json*.
The code will compile to *bin/js/game.js* (a single file), and a *bin/js/game.js.map* file with additional information will be created.

### Javascript

Alternatively, you can simply write your code directly in javascript, and skip the typescript part.

### Project structure

*bin* folder contains everything about your game: the actual code (in js/game.js), the phaser code (js/phaser.js), the html page that will be served and will contain your game (index.html), your game's assets (assets folder).

*server/server.js* is your node server, which will serve static files from the *bin* folder.

*tsDef* folder contains typescript definition files, for [P2 physics](https://schteppe.github.io/p2.js/), Phaser, and [PixiJS](http://www.pixijs.com/).

*.vscode* folder contains configuration files, *tasks.json* contains the info for compiling typescript to javascript, while *launch.json* contains the info for running the server with node.



*Adapted from [this tutorial](https://divillysausages.com/2015/06/09/using-phaser-with-visual-studio-code/)*