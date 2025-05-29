// For mongo to create a database we need to specify some data to insert
db.libraries.insert({ name: 'test' });
db.libraries.deleteOne({ name: 'test' });

db.createUser(
  {
    user: "library",
    pwd: "pass",
    roles: [
      {
        role: "readWrite",
        db: "library"
      }
    ]
  }
);