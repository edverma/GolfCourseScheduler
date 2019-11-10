const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const initData = require('./init_data.js');
const url = "mongodb://127.0.0.1:27017/scheduler_database";
const server = '127.0.0.1:27017';
const database = 'scheduler_database';

class Database {
    constructor() {
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
        document.save( (err) => {
            callback(err);
        });
    }
}

module.exports = new Database;