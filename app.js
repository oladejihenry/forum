const express = require('express');

const mainRoutes = require('./routes/mainRoutes');
const adminRoutes = require('./routes/adminRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

//Por
const port = 3000;

//Public asset files
app.use(express.static('public'));

// Template engine
app.set('views','view')
app.set('view engine', 'ejs')

//Body parser
app.use(express.json());

//Main Routes
app.use('/', mainRoutes)

//Admin Routes Middleware
app.use('/admin', adminRoutes)

//Admin Post Routes Middleware
app.use('/post', postRoutes)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})