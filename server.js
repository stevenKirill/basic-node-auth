const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require('./models')
const userRoutes = require ('./routes/userRoutes')

const PORT = process.env.PORT || 8088

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
  console.log("db has been re sync")
})

// app.use('/', (_req, res) => {
//   res.json({ info: 'Node.js, Express, and Postgres API' })
// })

app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
