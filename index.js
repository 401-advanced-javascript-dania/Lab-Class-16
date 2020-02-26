'use strict';
const event = require('./module/event.js');
require('./module/logger.js');
require('./module/file.js');
const fs = require('fs');
const util = require('util');
let file = `${__dirname}/./data/data.text`;
let readFileWithPromise=util.promisify(fs.readFile);
readFileWithPromise(file)
  .then(data=>{
    return data.toString();
  })
  .then(data=>writeFile(file,data))
  .then(data=>event.emit('cool',data))
  .catch(e=>event.emit('error',e));
let writeFileWithPromise = util.promisify(fs.writeFile);
const writeFile = (file,data)=>{
  data=data.toUpperCase();
  writeFileWithPromise(file,data);
  return data;
};