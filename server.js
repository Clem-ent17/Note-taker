// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Sets up the Express app to handle the custom CSS
app.use(express.static(__dirname + '/public'));


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
    res.sendFile(path.join(__dirname, "db/db.json"));
});


// Create New Note - takes in JSON input
app.post("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "db/db.json"), (err, data) => {
        // if error throw error
        if (err) throw err;

        // Collect db.json data and stock it into variable
        var notes = JSON.parse(data);
        
        // variable to collect information from notes.html
        var noteCollect = req.body;

        // variable to create a new note
        var newNote = {
            title: noteCollect.title,
            text: noteCollect.text
        }

        // Pushing new note into the notes array
        notes.push(newNote)
        //JSON function response
        res.json(notes)

        // Write db.json with new note
        fs.writeFile(path.join(__dirname, "db/db.json"), JSON.stringify(notes), (err, data) => {
            // if error throw error
            if (err) throw err;
        })
    })
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})