const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const initData = require('./init_data.js');
const url = "mongodb://127.0.0.1:27017/scheduler_database";
const server = '127.0.0.1:27017';
const database = 'scheduler_database';

class Database {
    constructor() {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);

        this._create();
        this._connect();
    }

    _create() {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                console.error('Database creation error: ', err)
            }
            initData( this, () => {
                console.log('Data initialized');
                db.close();
            });
        });
    }

    _connect() {
        mongoose.connect(url, { useNewUrlParser: true })
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.error('Database connection error');
            });
    }

    createDocument( jsonObj, schema, callback ) {
        let document = new schema( jsonObj );
        document.save( (err, doc) => {
            if(err){
                console.error(err);
                return;
            }
            callback(doc);
        });
    }

    updateDocument( jsonObj, schema, callback ) {
        if(!jsonObj._id){
            jsonObj._id = mongoose.Types.ObjectId();
        }
        schema.findOneAndUpdate( {_id: jsonObj._id}, jsonObj, {new:true, upsert: true}, (err, doc) => {
            if(err){
                console.error(err);
                return;
            }
            callback(doc);
        });
    }
}

module.exports = new Database;