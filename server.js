// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3800;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Sets up the Express app to handle the custom CSS
app.use(express.static(__dirname + '/public'));

// user input notes (DATA)
// =============================================================
var notes = [];

// Routes
// =============================================================
// Basic route that sends the user to the index page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Basic route that sends the user to the notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Basic route that sends the user to the db.json
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "db.json"));
});


// Create New Reservations - takes in JSON input
app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newNote = req.body;
    console.log(newNote);

    notes.push(newNote);

    res.json(newNote);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})