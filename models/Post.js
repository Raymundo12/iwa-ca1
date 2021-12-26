const mongoose = require ('mongoose');
const { intersects } = require('semver');

const PostSchema = mongoose.Schema({
   title: {
      type: String,
   
   },

   description: {
      type: String,
     
   },
         
});

module.exports = mongoose.model('Entrada', PostSchema);
