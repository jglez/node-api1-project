/***** BUILD YOUR SERVER HERE *****/

// 1a. Import Express from node_modules
const express = require('express')

// 1b. Import helper functions from module.exports
const User = require('./users/model')

// 2. Initialize web server
const server = express()

// 3. Teach Express how to read payload from requests
server.use(express.json())

// 4. Build Endpoints
server.get('/api/users', (req, res) => {

  User.find()
    .then(users => {
      console.log('GET all the users')

      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})


// EXPORT YOUR SERVER instead of {}
module.exports = server;
