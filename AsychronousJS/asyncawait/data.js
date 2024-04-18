let employees=[{'id':101,name:"Rahul", sal:450000},
{'id':102,name:"Sonia", sal:550000},
{'id':103,name:"Priyanka", sal:650000}]

let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let flag= true;
        flag?resolve("Data Inserted"):reject("Failed")
        employees.push(emp)
    },4000)
    })
}
let displayEmployee=()=>{
    setTimeout(()=>{
        let rows=""
        for(employee of  employees){
            rows = rows +` <tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                            </tr>`
        }
        document.getElementById('emp_Data').innerHTML = rows
    },2000)
}

let exec= async ()=>{
   await createEmployee({'id':104,'name':"Modi",'sal':67000})
    displayEmployee()
}
exec()