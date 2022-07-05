const m = require('mangoose');

module.exports = m.model(
     "premium",
  new m.schema({
       User: String,
    
  })
);