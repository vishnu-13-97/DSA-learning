let arr =[1,10,23,45,67,89,100];
let target = 45;

function binarySearch(arr,target){


    let low= 0;
    let high = arr.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(target == arr[mid]){
            return mid
        }else if (target>mid){
            low = mid+1
        }else{
            high=mid-1
        }
    }
    return -1
}

console.log(binarySearch(arr,target));

// Big O(logn)



