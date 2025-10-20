
let arr = [1,2,3,4,5,6,7,8,9,9,9,9,10,11];
let target = 9;

function fres(arr,target){

 function first(arr,target){
       let low=0;
    let high=arr.length-1;
    let first = -1;
while(low<=high){
    let mid=Math.floor((low+high)/2);

    if(target==arr[mid]){
        first=mid;
        high=mid-1
    }
else if(target<arr[mid]){
    high=mid-1
}else{
    low=mid+1
}
}
   return first
    
 }


 function last(arr,target){
       let low=0;
    let high=arr.length-1;
    let last = -1;
while(low<=high){
    let mid=Math.floor((low+high)/2);

    if(target==arr[mid]){
        last=mid
        low=mid+1
    }
else if(target<arr[mid]){
    high=mid-1
}else{
    low=mid+1
}
}
   return last
    
 }

 return [first(arr,target),last(arr,target)]
}

console.log(fres(arr,target));
