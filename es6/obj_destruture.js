// Objects Dstucturing
const profile = {
    name: "Anjan",
    age: 23,
    others: {
       games:{
        actionGames: ["valorant","pubg","call of duty"],
       }
    }
}

const{others:{games:{actionGames}}} = profile;
 console.log(actionGames[0]);


