// For mongo to create a database we need to specify some data to insert
db.library.insert({ name: 'test' });
db.library.deleteOne({ name: 'test' });

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