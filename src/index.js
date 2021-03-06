import express from 'express';
const app = express();

import bodyParser from 'body-parser'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

import cors from 'cors'
app.use(cors());

//db
import mongoose from 'mongoose'
mongoose.Promise = global.Promise;
app.set('database', (process.env.MONGODB_URI || 'mongodb://admin:admin@ds062339.mlab.com:62339/piperdb'));
//const uri = 'localhost/books';
mongoose.connect(app.get('database'))
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

import routes from './routes/index.routes';
app.use('/api/v1', routes);

app.set('port', (process.env.PORT || 3005))
app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'))
})
