
let nums = [2,2,7,7,7, 11, 15];


function hashm(nums){
   let map = new Map();
   for(let i=0;i<nums.length;i++){

    if(map.get(nums[i])){
      map.set(nums[i],map.get(nums[i])+1);
    }else{
      map.set(nums[i],1)
    }

   }
   return map
}


console.log(hashm(nums));
