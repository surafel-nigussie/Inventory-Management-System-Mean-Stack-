//dependency
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const MongoClient = require('mongodb').MongoClient
const authRoute = require('./Routes/AuthRoute')
const productSales = require('./Routes/ProductRoute')
const salesRoute = require('./Routes/SalesRoute')


//init
const app = express()

//setup
app.use(express.json());
app.use(cors())
app.use(helmet())

//middleware 


//routing
app.use('/api/auth', authRoute)
app.use('/api/sales', salesRoute)
app.use('/api/products', productSales)

//error handling 
app.use(function (err, req, resp, next) {
    if (err === 400) {
        resp.status(400).send('Bad Request.')
        resp.end()
    }
    else {
        resp.status(500).send('New Internal Server Error.')
        resp.end()
    }
})

//boot
app.listen(3000, () => console.log('Listening at 3000'))