let emp={ id:101,name:'Rahul',email:'rahul@gmail.com'}
//creating new object based on existing object
let new_Emp={...emp}
console.log(new_Emp)
//merge object
let details={sal:45000, email:'Rahul@ibm.com'}
let emp_Details={...emp, ...details}
console.log(emp_Details)