//What is spread operator?
// Extract and Copy

//applicable for arrays and objects.
/*
    1.create new arrays
    2.merge array
    3.extending array
*/

let a=[10,20,30]
let b=[20,30,40]
let c=[...a,...b]
console.log(c)


let enames=['Rahul','Sonia','Priyanka']
let new_Emps=[...enames,"Modi","Amith"]
console.log(new_Emps)