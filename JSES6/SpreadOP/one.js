let ids=[101,102,103,104]
//create new array based on existing array

let new_ids=ids   //aliasing

new_ids[0] = 201

console.log(ids)
console.log(new_ids)