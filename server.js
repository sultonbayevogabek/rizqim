const { PORT } = require('./config')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const userMiddleware = require('./middlewares/user-middleware')
const postgres = require('./modules/postgres')
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(async (req, res, next) => {
    req.psql = await postgres()
    next()
})
app.use(cookieParser())
app.use(userMiddleware)

const routesPath = path.join(__dirname, 'routes')
fs.readdir(routesPath, (err, files)=>{
    files.forEach(file=>{
        const router = require(path.join(routesPath, file))
        app.use(router.route, router.router)
    })
})

app.listen(PORT, () => {
    console.log('server listening at: localhost: 5000')
})

