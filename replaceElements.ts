const replaceElements = (arr:number[]):number[] => {
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = max;
        max = Math.max(max, temp);
    }

    return arr;
}
