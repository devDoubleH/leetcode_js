const findNumbers = (nums) => {
  let count = 0;
  for(let i=0; i<nums.length; i++){
    let s='';
    s=s+nums[i];
    if(s.length % 2 === 0){
      count++;
    }
  }
  return count;
}
