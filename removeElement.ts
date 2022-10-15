const removeElement = (nums: number[], num: number):number => {
    let index: number = 0;

    for (let j = 0; j < nums.length; j++){
        if (nums[j] !== num) {
            nums[index] = nums[j];
            index++;
        }
    }
    return index;
}

let result:number = removeElement([3, 2, 2, 3], 3);

console.log(result);
