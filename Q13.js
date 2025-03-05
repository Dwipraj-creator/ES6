const profile = { name: "Charlie", age: 29, 
                  address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };


let newUpdate = ({...profile,...updates})
let a = ({...newUpdate,city:"Sanfravcisco"})
console.log(a)
// let {name , age , address} =newUpdate
// console.log(n)
console.log(newUpdate)
let {name:name2 , age ,city:city1, address:{ zipcode , country}} =newUpdate
console.log(`{name: "${name2}" , age: ${age}, city: ${city1}}`)