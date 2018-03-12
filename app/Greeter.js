const text  = require('./a');
const config  = require('../static/config');
const greet = ()=>{
  let greet = document.createElement('div');
  greet.textContent = text.name;
  return greet;
}

module.exports = greet();