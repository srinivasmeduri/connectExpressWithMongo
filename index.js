var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
    });
    dbo.createCollection("empDetails", function (err, res) {
        if (err) throw err;
        console.log("empDetails Collection created!");
    });

    // InsertOne obj in db
    var myObj = {
        name: "srinu",
        address: "kphb"
    };
    dbo.collection("customers").insertOne(myObj, function (err, res) {
        if (err) throw err;
        console.log("myObj doc was inserted ::: " + JSON.stringify(myObj));
    });

    // Insertmany Obj in db
    var manyObj = [
        {
            name: 'srinu',
            address: 'kphb'
        },
        {
            name: 'anji',
            address: 'nizampet'
        },
        {
            name: 'syam',
            address: 'kphb phase 1'
        },
        {
            name: 'malik',
            address: 'kphb phase 1'
        },
        {
            name: 'mastan',
            address: 'jdm'
        }
    ];

    dbo.collection("empDetails").insertMany(manyObj, function (err, res) {
        if (err) throw err;
        console.log("Many obj was created ::" + JSON.stringify(manyObj)); 
        console.log("Inserted count was :: " + res.insertedCount); 
    });
});