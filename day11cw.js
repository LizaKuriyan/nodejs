const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("lead");
    const myobj = [
      { name: 'Arjun', city: 'Kannur' },
      { name: 'Meera', city: 'Kochi' },
      { name: 'Lakshmi', city: 'Calicut' },
    ];
    return db.collection("leads").insertMany(myobj)  
      .then(() => {
        console.log("Inserted 3 documents");
    return db.collection("leads").findOne({city:"Kochi"}, { projection: { _id: 0, } });})
      .then(result => {
        console.log(result);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });