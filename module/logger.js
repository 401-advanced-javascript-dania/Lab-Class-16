'use srtict';
const event = require('./event.js');
event.on('cool',payload=> logTheEvents('cool',payload));
event.on('error',paload => logTheEvents('error',payload));
function logTheEvents(event,payload){
    let message = `${event.toUpperCase()}`;
    let time = new Date();
    
}
