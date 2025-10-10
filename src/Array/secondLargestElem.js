let arr = [13, 80, 132, 50, 10];

function secondl(arr){
let first = -Infinity;
let second = -Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>first){
        second=first;
        first=arr[i];
    }else if(arr[i]<first && arr[i]>second){
        second=arr[i]
    }
    
}
return second

   }
console.log(secondl(arr));
