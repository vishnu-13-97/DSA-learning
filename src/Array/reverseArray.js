let arr = [10,20,30,40,50,60];

function reverse(arr){
    let newarr = []
    for(let i = arr.length-1; i>=0;i--){
     newarr.push(arr[i])
    }

    return newarr

}
console.log(reverse(arr));
