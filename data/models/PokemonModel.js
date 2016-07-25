var mongoose = require('mongoose');
var PokemonSchema = require('../schemas/PokemonSchema');

var Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;