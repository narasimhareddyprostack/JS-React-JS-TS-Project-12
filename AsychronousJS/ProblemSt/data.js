let employees=[{id:101,name:"Rahul",sal:45000},
                {id:102,name:"Sonia",sal:55000}]

let createEmployee=(emp)=>{
    console.log("Executing First")
    setTimeout(()=>{
        employees.push(emp)
    },4000)
    console.log(employees.length)
}
let displayEmployees=()=>{
    console.log("Executing second")
    
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows = rows +`<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                          </tr>`
        }
        document.getElementById('emp_Data').innerHTML = rows
    },2000)
}
createEmployee({id:103,name:"Priyanka",sal:65000})
displayEmployees()