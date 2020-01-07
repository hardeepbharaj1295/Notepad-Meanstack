const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const Note = require('../models/note');

/**
 * MongoDb connection String
 */
const db = "mongodb://userroot:root123@ds141464.mlab.com:41464/notepad";
mongoose.Promise = global.Promise;

/**
 * MongoDB Connection Establishment
 */
mongoose.connect(db ,{ useNewUrlParser: true },function(err){
    if(err){
        console.error("Error ! "+err);
    }
    else{
        console.log("Connection Establish");
    }
});

/**
 * get method used to get the data
 * Used for get the request all data and response from dB
 */
router.get('/note',function(req,res){
    console.log("Request for all notes");
    Note.find({})
    .exec(function(err,notes){
        if(err){
            console.log("Error while data reteriving" + err);
        }
        else{ 
            res.json(notes);
        }
    });
});

/**
 * get method is used to get the data 
 * Use a particular data from database
 */
router.get('/note/:id',function(req,res){
    console.log("Request for a single note");
    Note.findById(req.params.id)
    .exec(function(err,notes){
        if(err){
            console.log("Error while data reteriving" + err);
        }
        else{
            res.json(notes);
        }
    });
});

/**
 * post method is used to insert the data
 * Insert a data into the database
 */
router.post('/note',function(req,res){
    console.log('Post a note into DB');
    var newNote = new Note();
    newNote.title = req.body.title;
    newNote.description = req.body.description;
    newNote.timing = req.body.timing;
    newNote.save(function(err,insertedNote){
        if(err){
            console.log("Data Insertion error : "+ err);
        }
        else{
            res.json(insertedNote);
        }
    }); 
});

/**
 * put request used to update a data
 * findbyidandupdate take 4 args
 * first arg id 
 */
router.put('/note/:id', function(req,res){
    console.log('Update a Note');
    Note.findByIdAndUpdate(req.params.id,
    {
        $set : {title : req.body.title, description : req.body.description, timing : req.body.timing}
    },
    {
        new : true
    },
    function(err,updatedNote){
        if(err){
            res.send("Error updating Note : "+ err);
        }
        else{
            res.json(updatedNote);
        }
    }
    );
});

/**
 * delete used to delete a data 
 */
router.delete('/note/:id',function(req,res){
    console.log('Deleting a note from DB');
    Note.findByIdAndRemove(req.params.id,function(err,deletedNote){
        if(err){
            res.send("Error deleting note : "+ err);
        }
        else{
            res.json(deletedNote);
        }
    });
});

module.exports = router;