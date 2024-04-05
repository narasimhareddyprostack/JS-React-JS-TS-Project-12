class Parent{
    parent_Name;
    constructor(name){
        //console.log("Parent Class Constuctor")
        this.parent_Name = name
    }
}
class Child extends Parent{
    child_Name;
    constructor(name,p_Name){
            super(p_Name)
          //  console.log("Child Class Constrcutor")
            this.child_Name=name
    }

}
let c1=new Child('Rahul Gandhi','Sonia Gandhi')
console.log(c1)
let c2=new Child('appu', 'rajkumar')
console.log(c2)