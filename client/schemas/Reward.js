var mongoose = require('mongoose');
var args = require('./args.js')

mongoose.connect(args.connectionString);

var Schema = mongoose.Schema;

var rewardSchema = new Schema({
    name: {type: String, required: true},
    photo: {type: String, required: false},
	description: {type: String, required: true},
	points: {type: Number, required: true},
});

// export rewardSchema as a class called reward
module.exports = mongoose.model('reward', rewardSchema);
