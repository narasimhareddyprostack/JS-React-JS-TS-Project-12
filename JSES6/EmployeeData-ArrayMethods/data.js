let employees=[
    {id:101,name:"Rahul Gandhi", sal:55000},
    {id:102,name:"Sonia Gandhi", sal:65000},
    {id:103,name:"Priyanka Gandhi", sal:75000},
    {id:104,name:"Modi ", sal:85000},
    {id:105,name:"Amith ", sal:95000},

]
function display_Employee(){
    let rows=""
    employees.forEach((employee)=>{
        rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                       </tr>`
    })
    document.getElementById('t_data').innerHTML =rows
    //document.getElementById('t_data').innerHTML ="GA"
}