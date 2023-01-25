// function myLocation(city,state){
// const location = {city,state}
// console.log(location);
// }

// myLocation("Chandpur","Dhaka")

function myLocation (address){

    const {town,city,state} = address;

    const myAddress = {
        town,
        city,
        state,
        country: "Bangladesh"
    }
    console.log(myAddress);
}

myLocation({town:"Matlab",city:"Chandpur",state:"Comilla"})