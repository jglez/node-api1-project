/***** BUILD YOUR SERVER HERE *****/

// 1. Import Express from node_modules
const express = require('express')

// 2. Initialize web server
const server = express()

// 3. Teach Express how to read payload from requests
server.use(express.json())

// 4. Build Endpoints
server.use('/api/users', (req, res) => {
  res.status(200).json({ message: 'API Users' })
})





// EXPORT YOUR SERVER instead of {}
module.exports = server;
