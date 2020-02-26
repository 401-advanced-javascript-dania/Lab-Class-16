'use strict';
const fs =require('fs');
const util =require('util');
let event = require('../module/event.js');
require('../module/file.js');
require('../module/logger.js');
let writeFileWithPromise = util.promisify(fs.writeFile);
let readFileWithPromise=util.promisify(fs.readFile);
const writeFile = (file,data)=>{
  data=data.toUpperCase();
  writeFileWithPromise(file,data);
  return data;};
describe('Fs ',()=>{
  let file = `${__dirname}/../data/data.text`;
  it('read and write the file',()=>{
    readFileWithPromise(file)
      .then(data=>{
        expect(data).toBeDefined();
        expect(data.toString()).toEqual('hi');
        return data.toString();
      })
      .then(data =>{
        writeFile(file,data);
        expect(data).toEqual('HI');
      })
      .then(data =>{
        expect(event.emit('cool',data)).toBeTruthy();
      })
      .then(data =>{
        event.emit('error',error);
      });
  });
});
 