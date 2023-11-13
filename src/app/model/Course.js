const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name:  {type: String, maxLenght: 255 },
  desciption : {type: String, maxLenght: 600  },
  image: {type: String, maxLenght: 255  },
  updateAt: {type: Date, default: Date.now },
  createAt: {type: Date, default: Date.now },
});

module.exports = mongoose.model('Course',Course,'coursses');
