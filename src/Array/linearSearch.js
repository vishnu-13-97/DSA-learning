let arr = [10,20,32,1,6];
let target = 1;

function linear(arr,target){

for(let i=0;i<arr.length;i++){
    if(arr[i]==target){

        return i
    }
    
}
return -1

}
console.log(linear(arr,target));
// Time Complexity O(n)