let arr =[1,2,3,4,5,10,20,30,40,50];
let target=2;

function binarySearch(arr,target){
  let low=0;
  let high=arr.length-1;

  while(low<=high){
    let mid=Math.floor((low+high)/2);
    
    if(target==arr[mid]){
      return mid
    }else if(target<=arr[mid]){
      high=mid-1
    }else{
      low=mid+1
    }
  }
  return -1
}

console.log(binarySearch(arr,target));
