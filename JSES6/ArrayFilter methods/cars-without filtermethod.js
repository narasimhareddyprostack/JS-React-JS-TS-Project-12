let cars=[
    {model:'Swift',brand:'Maruthi', price:800000, color:"Red"},
    {model:'Fortuner',brand:'Toyota', price:4800000, color:"Black"},
    {model:'Seltos',brand:'Kia', price:2100000, color:"Red"},
    {model:'x1',brand:'BMW', price:5800000, color:"White"},
    {model:'Nexon',brand:'Tata', price:1500000, color:"Yellow"},
    {model:'Discovery',brand:'RR', price:5800000, color:"Green"},
    {model:'Tiago',brand:'Tata', price:400000, color:"Red"},
    {model:'Scorpio',brand:'Mahindra', price:1800000, color:"Black"},
    {model:'Xuv700',brand:'Mahindra', price:2800000, color:"Balck"},

]

//print only white color cars
for(car of cars){
    if(car.color ==='White'){
        console.log(car)
    }
}
//collect all red color cars- new array
let red_cars=[]
for( car of cars){
    if(car.color ==="Red"){
        red_cars.push(car)
    }
}
console.log(red_cars)
//print only below 5 lacks cars

for(car of cars){
    if(car.price < 500000)
    console.log(car)
}