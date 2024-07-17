//db.persons.aggregate([
//{$group: {_id: "$age"}}
//]) // documents with _id = distinct age

//db.persons.aggregate([
//    {$group: {_id: {age: "$age", gender: "$gender"}}}
//]) // documents with _id = {distict combination of age and gender}

//db.persons.aggregate([
//    {$group: {_id: "$company.location.country"}} // nested expression
//]) // documents with _id = distict company location country

db.persons.aggregate([
    {$group: {_id: "$company"}}
]) // documents with _id = distict company attribute





