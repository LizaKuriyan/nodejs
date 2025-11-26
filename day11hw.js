const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/mashupdb";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const myobj = [
      { name: 'John', city: 'Trivandrum' },
      { name: 'Rahul', city: 'Calicut' },
      { name: 'Dean', city: 'Trivandrum' },
      { name: 'Deepak', city: 'Kollam' },
      { name: 'Ashwin', city: 'Calicut' },
      { name: 'Rolly', city: 'Alleppy' },
      { name: 'Nikhil', city: 'Kottayam' },
      { name: 'Raymond', city: 'Trivandrum' },
     ];
    return db.collection("lead").insertMany(myobj)  
      .then(() => {
        console.log("Inserted 8 documents");
    return db.collection("leads").find({ city: "Calicut" }, { projection: { _id: 0, city: 0 } }).toArray();})
      .then(result => {
        console.log(result);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });