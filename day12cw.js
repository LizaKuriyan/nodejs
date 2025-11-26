const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("techfest");
    const coll = db.collection("registration");

    const myobj = [
      { name: 'John', city: 'Trivandrum' },
      { name: 'Deepak', city: 'Kollam' },
      { name: 'Dean', city: 'Trivandrum' },
      { name: 'Rahul', city: 'Calicut' },
      { name: 'Ashwin', city: 'Calicut' },
      { name: 'Rolly', city: 'Alleppy' },
      { name: 'Nikhil', city: 'Kottayam' },
      { name: 'Raymond', city: 'Trivandrum' },
      { name: 'Dean', city: 'Trivandrum' }
    ];

    return coll.insertMany(myobj)
      .then(() => {
        console.log("Inserted 9 documents");

        return coll.updateOne(
          { name: "John" },
          { $set: { name: "Johnny", city: "Chennai" } }
        );
      })
      .then(() => {
        console.log("John updated");

        return coll.updateMany(
          { name: "Dean" },
          { $set: { city: "Kollam" } }
        );
      })
      .then(() => {
        console.log("All Deans updated");

        return coll.deleteOne({ name: "Deepak" });
      })
      .then(() => {
        console.log("Deepak removed");

        return coll.deleteMany({ name: /^D/i });
      })
      .then(() => {
        console.log("All names starting with D removed");
        console.log("All operations completed");
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });
