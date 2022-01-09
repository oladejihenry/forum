const express = require('express');

const mainRoutes = require('./routes/mainRoutes');
const adminRoutes = require('./routes/adminRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();


const port = 3000;

app.set('views','view')
app.set('view engine', 'ejs')

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