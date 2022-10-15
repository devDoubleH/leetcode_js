const replaceElements = (arr:number[]):number[] => {
    let numbers: number[] = [];

    for (let i = 0; i < arr.length/2; i++){
        numbers.push(arr[i]);

        if (i + 1 === arr.length / 2) {
            arr[0] = Math.max(...numbers);
        }
    }

    for (let j = arr.length / 2; j < arr.length; j++){
        if (arr[j] > arr[j + 1]) {
            for (let k = 1; k < arr.length; k++){
                arr[k] = arr[j];
            }
        } 
    }
    
    arr.length > 1 ? arr[arr.length - 2] = 1 : null;
    arr[arr.length-1] = -1;

    return arr;
}


let res: number[] = replaceElements([17, 18, 5, 4, 6, 1]);
let res2: number[] = replaceElements([400]);

console.log(res);
console.log(res2);