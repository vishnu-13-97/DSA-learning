let arr = [1, 3, 5, 4, 2];

function peakindex(arr){

let start=0;
let high=arr.length-1

while(start<high){
    let mid=Math.floor((start+high)/2)

    if(arr[mid]<arr[mid+1]){
        start=mid+1
    }else{
        high=mid
    }
}
return start

}

console.log(peakindex(arr));
