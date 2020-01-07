const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * This is the blueprint or Schema
 * that crearte monogoDb
 */

const noteSchema = new Schema({
    title: String,
    description: String,
    timing : String
});

/**
 * create the model of noteSchema
 * note 'name of the model'
 * notes 'name of the collection in mongoDB'
 */

module.exports = mongoose.model('note',noteSchema,'notes');