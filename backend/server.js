// bring in express - the backend web framework
const express = require('express')
// so that we can have envirionment variables 
const dotenv = require('dotenv').config()
// the port we want our server to run on 
// allows to access that PORT var from the .env file 
const port = process.env.PORT || 8000 

// init. express 
const app = express()

// Get is the request we want to listen for  
// first arg is the endoint, 2nd is a fxn that takes in a request response var
app.get('/api/goals', (req, res) => 
{
    // return JSON
    res.status(200).json({message: 'Get goals'})
})

// takes in a port number, and a second arg with a fxn
app.listen(port, () => console.log(`Server started on port ${port}`))
