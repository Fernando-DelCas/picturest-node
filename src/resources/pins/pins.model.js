const mongoose = require('mongoose');

// Define model schema
const pinModelSchema = mongoose.Schema({
  id: Number,
  board: Number,
  author: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  source: String,
  urlImage: String,
  name: String,
  description: String
});

// Compile model from schema
const Pin = mongoose.model('PinModel', pinModelSchema );

const create = (pin) => {
  Pin.create(pin, function (err, docs) {
    if (err){ 
      console.log(err) 
    }
    else{ 
      console.log("Created Docs : ", docs); 
    }
  });
};

const get = async(id) => {
  let query = { 'id': id };
  return await Pin.findOne(query);
};

const all = async() => {
  return await Pin.find();
}

const remove = (id) => {
  let query = { 'id': id };
  Pin.deleteOne(
    query,
    function (err, docs) { 
      if (err){ 
        console.log(err) 
      }
      else{ 
        console.log("Deleted Doc : ", docs);
      }
  }); 
};

const update = (id, updatedpin) => {
  let query = { 'id': id };
  Pin.updateOne(
    query,
    updatedpin, 
    function (err, docs) { 
      if (err){ 
        console.log(err) 
      }
      else{ 
        console.log("Updated Docs : ", docs); 
      }
  }); 
};

module.exports = {
    create,
    update,
    remove,
    get,
    all
  };