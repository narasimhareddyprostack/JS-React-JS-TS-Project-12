let goToGoa = (success,failure)=>{
    let acc_Bal = 5000
    if(acc_Bal> 15000){
        success("Go and Enjoy!")
    } 
    else{
        failure("Go to Prostack! Practice well")
    }

}

goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})