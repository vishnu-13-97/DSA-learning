let arr =[1, 2, 3, 4, 5];
let target = 6;

function sortedArraysum(arr,target){
let first=0;
let last = arr.length-1;

let sum=[]
while(first<last){

if(arr[first]+arr[last]==target){
   sum.push([arr[first],arr[last]])
   first++;
  last--;
}

}

return sum

}

console.log(sortedArraysum(arr,target));
