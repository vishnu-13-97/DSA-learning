let arr=[0, 1, 0, 3, 12]


function movezero(arr){
    let j = 0;
for (let i = 0; i < arr.length; i++) {


    if(arr[i]!=0){
        arr[j]=arr[i]
        j++
    }
}
  
while(j<arr.length){
    arr[j]=0;
    j++
}

return arr

}

console.log(movezero(arr));
