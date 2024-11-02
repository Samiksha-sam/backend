let fruits = ['Mango','Banana','Orange','Watermelon']

//----------------------------------------------Iteration methods----------------------------------//

//forEach: traverse the array, takes two params element and index
fruits.forEach((element,index) => {
    console.log(index, element)
})

//filter: traverse the array, return a new array which satisfies the given condition
let newFruits = fruits.filter((element,index) => element.length>4)
console.log(newFruits)

//map