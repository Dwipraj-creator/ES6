const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
    { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

   const [{name, address:{city,street:{ name:streetName}}},{name:name1, address:{city:city1,street:{name:streetName1}}}] = people

    let newarr =[(`${name} lives in ${city} on ${streetName} , ${name1} lives in ${city1} on ${streetName1}`)]
  //  console.log(`${name1} lives in ${city1} on ${streetName1}`)
  console.log(newarr)