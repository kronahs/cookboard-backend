const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/user');
const bookmarkRoutes = require('./routes/bookmark');


const app = express()

app.use(cors())
app.use(bodyParser.json())


app.use('/recipes', recipeRoutes);
app.use('/users', userRoutes);
app.use('/bookmarks', bookmarkRoutes)



app.get("/", (req,res) => {
    res.send("Welcome to Cookboard");
})



mongoose.connect("mongodb+srv://root:administrator@cookboard-cluter.mcxe6ow.mongodb.net/?retryWrites=true&w=majority")
.then( () => {
    console.log("Connected to MongoDB");
    app.listen("5000", () => {
        console.log("Server on port 5000");
    })
}
) .catch((err) => {
    console.error(err);
})
