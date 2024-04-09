let enames=['rahul','sonia','priyanka','modi']
//create new employee names with  capitle letters - array

let new_Enames=enames.map((ename)=>{
    return ename.toLocaleUpperCase()
})
console.log(enames)
console.log(new_Enames)