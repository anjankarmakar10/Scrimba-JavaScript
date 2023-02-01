

function swap(arr,index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}
let arr = [1,2,3];

swap(arr,0,2)
console.log(arr);
