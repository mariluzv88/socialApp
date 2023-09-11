const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
require('dotenv').config()
require('./config/database')
app.use(express.json());

app.use('/api/users', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.get('/', (req, res)=> {
    res.send("Hello")
  });


app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });