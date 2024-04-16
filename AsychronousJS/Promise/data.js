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
let displayEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows = rows+`<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                        </tr>`
        }
        document.getElementById('table_body_data').innerHTML =rows
    },2000)
}

createEmployee({'id':103,'name':"Priyanka Gandhi",sal:65000})
.then((msg)=>{
    console.log(msg)
    displayEmployees()
})
.catch((err)=>{
    console.log(err)
})
