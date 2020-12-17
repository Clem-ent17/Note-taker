
# homework-11

Note Taker - Express


## Links:

GitHub repository: 
https://github.com/Clem-ent17/Note-taker

Live link to access the application:
https://glacial-lowlands-50524.herokuapp.com/


## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.


## User story:

* AS A user, I want to be able to write and save notes

* I WANT to be able to delete notes I've written before

* SO THAT I can organize my thoughts and keep track of tasks I need to complete


## Description:

This project is an application that can be used to write, save, and delete notes. This application  use an express backend and save and retrieve note data from a JSON file.


## Installation:

* In the `Develop` folder, there is a `package.json`, make sure to `npm install` and install the package.

* The dependencies are, [Express](https://www.npmjs.com/package/express), [inquirer](https://www.npmjs.com/package/inquirer) and [Nedomon](https://www.npmjs.com/package/nodemon).

* After installing the dependencies you can run a live servor by typing into your terminal: `npm run watch`


## Usage:

* This app run as a Node CLI to gather information about each employee.

* The user will start the App in its terminal with the command `node app.js`

* A series of questions will be asked to fill the employee caracteristics:
  * Name

  * Role (Manager, Engineer, Intern)

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)

* At the end of this employee questions, the app will request if the use wants to continue adding employee, or not (yes/no question)

* If yes, the user will be able to add new employees

* If no, the App will generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. 


## Technologies:

* Technology used in this application: 
    - HTML
    - CSS
    - Bootstrap
    - JavaScript
    - jQuery
    - GitHub

* npm dependencies: 
    - [Express](https://www.npmjs.com/package/express)
    - [inquirer](https://www.npmjs.com/package/inquirer)
    - [Nedomon](https://www.npmjs.com/package/nodemon)


* Live deployment:
    - [Heroku](https://dashboard.heroku.com/)


## Project status:

* When deleted, the note doesn't refresh on the browser, without hitting reload.

- - -

Clement Valles
