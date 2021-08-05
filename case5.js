const arr = [4, 5, 8, 9, 0, 2, 8, 2, 11, 15, 2, 9, 0]

function unique(arr){
    let tmp = [];

    for(let i = 0; i < arr.length; i++){

        if(tmp.indexOf(arr[i]) === -1){
            tmp.push(arr[i]);
        }

    }

    let sort = tmp.sort((a, b) => a - b);
    return sort;
}

console.log(unique(arr));
