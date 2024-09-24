// Basic Aggregation Pipeline (Group by Major and Count Students):

db.students.aggregate([
    { $group: { _id: "$major", count: { $sum: 1 } } }
  ])

// Filter, Group, and Sort Aggregation (Students with Age > 22):
db.students.aggregate([
    { $match: { age: { $gt: 22 } } },
    { $group: { _id: "$major", avgAge: { $avg: "$age" } } },
    { $sort: { avgAge: -1 } }
  ])

  // Aggregation with Array Unwind (Unwind Grades and Calculate Average):
  db.students.aggregate([
    { $unwind: "$grades" },
    { $group: { _id: "$name", averageGrade: { $avg: "$grades" } } }
  ])
  