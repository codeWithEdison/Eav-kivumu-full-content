// Create a Simple Index on name:
db.students.createIndex({ name: 1 })

// Create a Compound Index on name and age:
db.students.createIndex({ name: 1, age: -1 })

//Create a Text Index (for Text Search):
db.students.createIndex({ major: "text" })
