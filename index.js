const express = require('express');
// const db = require('./config/connection');
const routes = require('./routes');
const mongodb = require('mongodb').MongoClient;

const cwd = process.cwd();

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const connectionStringURI = `mongodb://127.0.0.1:27017/SocializeMe`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  // (err, client) => {
  //   db = client.db();
  //   db.collection('SocializeMe').deleteMany({});
  //   db.collection('SocializeMe').insertMany(data, (err, res) => {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log('Data inserted');
  //   });

    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    })
  // }
);

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server for ${activity} running on port ${PORT}!`);
//   });
// });
