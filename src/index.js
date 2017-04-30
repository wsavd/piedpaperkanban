import express from 'express';
const app = express();

//db
import mongoose from 'mongoose'
mongoose.Promise = global.Promise;
app.set('database', (process.env.MONGODB_URI || 'mongodb://admin0:admin0@ds145828.mlab.com:45828/test9797'));
//const uri = 'localhost/books';
mongoose.connect(app.get('database'))
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

import routes from './routes/main.routes';

app.use('/api/v1', routes);

app.set('port', (process.env.PORT || 3000))
// arrow functions
app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'))
})
