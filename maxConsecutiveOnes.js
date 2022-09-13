const findMaxConsecutiveOnes = () => {
  let result = 0;
  let current = 0;

  for(let n of nums){
    if(n == 0){
      result = Math.max(result, current);
      current = 0;
    }else {
      current++;
    }
  }

  return Math.max(result, current);
}
