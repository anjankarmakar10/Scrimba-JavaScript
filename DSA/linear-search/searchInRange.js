
let arr = [18,12,-7,3,14,28];

function search(arr,index1,index2,target){
    for(let i = index1; i <= index2; i++){
        if(arr[i]===target) return [arr[i]];
    }
    return [-1]
}

console.log(search(arr,1,4,14));