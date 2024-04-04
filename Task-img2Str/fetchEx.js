fetch('https://dummyjson.com/products')
.then((resp)=>resp.json())
.then(json=>console.log(json))
.catch((err)=>{console.log(err)})
