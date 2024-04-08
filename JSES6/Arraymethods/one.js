var enames=["Rahul","Sonia","Priyanaka","Modi"];
//itrate array - enames using for loop, while loop, dowhile loop, for..of

//1. for loop
for(let i=0;i<=enames.length-1;i++){
    console.log(enames[i])
}
//2.while loop
var i=0;
while(i<=enames.length-1){
    console.log(enames[i])
    i++
}
//3. dowhile loop

var i=0;
do{
    console.log(enames[i])
    i++
}while(i<=enames.length-1)

console.log("using for ..of ")

for(ename of enames){
    console.log(ename)
}