let arr = [1,2,3,2,1];

function rev(arr){

    let start = 0;
    let end = arr.length-1;

    while(start<end){
        // [arr[start],arr[end]]=[arr[end],arr[start]];
        if(arr[start]==arr[end]){
               start++;
        end--
        }else 
                 return false
    }

    return true

}

console.log(rev(arr));
