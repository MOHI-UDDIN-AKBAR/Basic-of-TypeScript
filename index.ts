// data types 
let id:number=5
let personName:string='Arafat'
let isLoading:boolean=true 
let age:number
age=23
let anything:any="2"
let people:string[]=["Arafat","Samir","Rifat"]
let numbers:number[]=[2,4,5,5]
let arr:any=["Arafat",23]
//tuple 
let person:[string,number,boolean]=["arafat",23,true] 

//tuple Array
let employee:[number,string][]=[
[1,"arafat"],
[2,"rifat"],
[3,"samir"]
]

//Union 
const option:string|number=3 

//object 
const objectOne:{id:number,name:string}={
    id:3,
    name:"arafat"
}
// or another option is 
type User={
    id:number,
    name:string
}
const objectTwo:User={
    id:1,
    name:"samir"
}

//type assertion 
const newId:any=2
const customerId=<number>newId 
// or 
const employeeId=newId as number 

// function 

function sum(x:number,y:number):number{
    return x+y 
}
console.log(sum(2,4))
//if function does not return anything than return type is void 
function sub(x:number,y:number):void{
    console.log(x+y)  
}
sub(2,4) 
 
//interface which is similar to type 
//interface most of time use for objects
interface objectThreeType{
    id:number
    name:string
    age?:number //it is option we can or if we do not want. depends on user
}
const objectThree: objectThreeType={
    id:3,
    name:"Rifat"
}
//interface with function 
interface mathFun{
  (  x:number ,
    y:number):number
}
const MathFunction:mathFun=(x:number,y:number):number=>x+y 


//class 
interface personInterface {
    id:number
    name:string
    getSummery():string

}
class Person implements personInterface{
    id:number
    name:string
    constructor(id:number,name:string){
this.id=id 
this.name=name
    }
    getSummery(){
        return ` my name is ${this.name}`
    }
}

const personOne=new Person(1,"arafat")

