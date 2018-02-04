const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database')

mongoose.connect(config.uri, (err)=> {
if (err) {
  console.log('Could not connect', err);
} else {
  // console.log('The secret is ',config.secret);
  console.log('Connected Successfully to ' + config.db);
}
});
app.use(express.static(__dirname+ '/my-app/dist'));
app.get('*',(req,res) => {    //  * in the get means no matter waht route the user puts, this rout will be displayed
  res.sendFile(path.join(__dirname + '/my-app/dist/index.html'))
});
app.listen(3000, () =>{  //This fat arrow function is to let us know in the console that our server has started
  console.log('Listening on port 3000');
});
