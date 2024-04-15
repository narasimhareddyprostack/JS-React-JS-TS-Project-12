let employees=[{id:101,name:"Rahul",sal:45000},
                {id:102,name:"Sonia",sal:55000}]

let  createEmployee =(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)
}
let  displayEmployees =()=>{
    setTimeout(()=>{
        let rows=""
        employees.forEach((emp)=>{
            rows = rows + `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
                </tr>`
        })
        document.getElementById('emp_Data').innerHTML = rows
    },2000)
}

createEmployee({'id':103, name:"Priyanka",sal:65000},displayEmployees)
//displayEmployees()