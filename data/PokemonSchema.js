var Schema = require('mongoose').Schema;

var PokemonSchema = new Schema({
    name:{
        type: String,
        unique: true
    },
    Stat:[{
        region: String,
        probability: String
    }],
     meta: {
        created_at: {
            type: Date,
                'default': Date.now,
            set: function (val) {
                return undefined;
            }
        },
        updated_at: {
            type: Date,
                'default': Date.now
        }
    }
});

PokemonSchema.statics.search = function (str, callback) {
    var regexp = new RegExp(str, 'i');
    return this.find({
        '$or': [{
            title: regexp
        }, {
            body: regexp
        }]
    }, callback);
};

module.exports = TaskSchema;
