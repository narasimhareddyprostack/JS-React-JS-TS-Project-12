let employees=[
    {id:101,name:'Rahul Gandhi',sal:45000},
    {id:102,name:'Sonia Gandhi',sal:55000},
    {id:103,name:'Priyanka Gandhi',sal:65000},
    {id:104,name:'Modi',sal:75000},
   ]

function displayEmpData(){
    let rows=""
    for(emp of employees){
        rows = rows+`<tr> 
                        <td>${emp.id}</td> 
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
                     </tr>`
    }

document.getElementById('t_Data').innerHTML =rows
//document.getElementById('t_Data').innerHTML ="GA"
}