let arr = [13, 80, 132, 50, 10];

function rev(arr){

    let start = 0;
    let end = arr.length-1;

    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--
    }

    return arr

}

console.log(rev(arr));
