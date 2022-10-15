const sortArrayByParity = (nums: number[]): number[] => {
    let i:number = 0;
    let odds: number[] = [];
    for (let j = 0; j < nums.length; j++){
        if (nums[j] % 2 == 0) {
            nums[i] = nums[j];
            i++;
        } else if (nums[j] % 2 !== 0) {
            odds.push(nums[j]);
        }
    }
    for (let k = 0; k < odds.length; k++){
        nums[i] = odds[k];
        i++;
    }
    return nums;
}


let res = sortArrayByParity([3, 1, 2, 4]);

console.log(res);