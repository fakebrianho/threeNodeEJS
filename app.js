const express = require('express')
const app = express()
const path = require('path')

// Set up EJS as the templating engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')))

// Define routes
app.get('/', (req, res) => {
	res.render('index')
})

// Start the server
const port = 3000
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
