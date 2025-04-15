// Object.assign()
let obj1={name:"test"}
let obj2={track:"web3"}
let obj3={mode:"game"}

console.log("before",obj3);
Object.assign(obj3,obj2,obj1)
console.log("after", obj3);


// object.creat
let object1={name:"test"}
let object2={track:"web3"}
let object3={mode:"game"}

object1.assign(object1,object2,object3)
console.log();
