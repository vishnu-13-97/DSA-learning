
let nums = [2, 7, 11, 15];
let target = 9;

function hashm(nums,target){
   let map = new Map();

   for(let i=0;i<nums.length;i++){
    let balance = target-nums[i];
if(map.has(balance)){
  return [map.get(balance),i]
}else{
  map.set(nums[i],i)
}

   }
   

}


console.log(hashm(nums,target));
