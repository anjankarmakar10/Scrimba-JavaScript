// let numbers = [10,20,30]
// let total = 0;

// for (const number of numbers){
//     total += number
// }

// console.log(total);


// Carecter Counter
// let fullName = "Anjan Karmakar"
// let count = 0
// for(const char of fullName){
//     if (char !== " ") {
//       count++;
//     }
// }
// console.log(count);



const students = [
    {name:"Kevin", city: "New York"},
    {name:"Anjan", city: "Dhaka"},
    {name:"Rahul", city: "Mumbai"}
]

for (const {name, city} of students){
    console.log(`${name} live in ${city}`);
}
