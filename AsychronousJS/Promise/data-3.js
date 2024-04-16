let employees=[{'id':101,'name':"Rahul Gandhi",sal:45000},
              {'id':102,'name':"Sonia Gandhi",sal:55000}
              ]
let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag= true;
            flag?resolve("Data Inserted!"):reject("Failed!")
            employees.push(emp)
        },4000)
    })
}
let displayEmployees=()=>{}

createEmployee({'id':103,'name':"Priyanka Gandhi",sal:65000})
displayEmployees()