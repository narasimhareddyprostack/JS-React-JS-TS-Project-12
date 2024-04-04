var globalStr=""
let img2Str = ()=>{
    //alert('GA')
    let imageFile = document.getElementById('imgFile').files[0];
    let taRef = document.getElementById('xyz')
    console.log(imageFile)
    console.log(imageFile.size)
    let reader=new FileReader();
    reader.readAsDataURL(imageFile)
    reader.addEventListener("load", function(){
        console.log(reader.result)
        globalStr = reader.result
        taRef.innerText = reader.result
    })
    
}

let str2Image = ()=>{
    //alert("GA")
    let imgTagRef = document.getElementById('imgTag')
    console.log(imgTagRef)
    imgTagRef.src = globalStr
}