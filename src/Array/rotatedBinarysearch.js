let arr =[6,7,8,9,0,1,2,3,4,5];
let target = 4;

function binarySearch(arr,target){

    let start =0;
    let end=arr.length-1;
    
   while (start<=end) {

    let mid=Math.floor((start+end)/2);

    if(arr[mid]==target){
      return mid
    }
    if(arr[start]<arr[mid]){
      if(target>=arr[start]&&target<arr[mid]){
        end=mid-1
      }else{
        start=mid+1
      }
    }else{
      if(target<=arr[end]&&target>arr[mid]){
        start=mid-1
      }else{
        end=mid+1
      }
    }
    
   }
   return -1
}

console.log(binarySearch(arr,target));





