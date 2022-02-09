const express = require ('express')
const path = require ('path')
const cors = require('cors')

const Sequelize = require('sequelize')
const sequelize = require('./utils/database')




const app = express()

// CORS

app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, x-access-token');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// 

app.use(express.json())
app.use(express.static(path.resolve(_dirname, '../frontend_tmp/build')))
app.get('*',(req,res) => {
  res.sendFile(path.resolve(__dirname, '../frontend_tmp/build', 'index.html'))
})

// Routes

app.use('/api', require('./routes/scrim'))
app.use ('/api', require('./routes/user'))
app.use ('/api', require('./routes/prepaotf2'))
app.use ('/api', require('./routes/otf1'))



const PORT = process.env.PORT
if (PORT = null || PORT =="") {
  PORT = 5000
}
app.listen(PORT)


// Test DB

sequelize.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log(err))

// Creation table

sequelize.sync().then(result => {
  // console.log(result)
}).catch(error => {
  // console.log(error)
})

module.exports = app
