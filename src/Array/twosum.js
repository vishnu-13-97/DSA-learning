let arr = [5,2,7,11,32,25];
let target = 12;

function twoSum(arr,target){

for( let i =0;i<arr.length;i++){
    for(let j = i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            return [arr[i],arr[j]]
        }
    }
}
return null

}
console.log(twoSum(arr,target));
