const arr = [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67]

function unique(arr){
    let tmp = [];

    for(let i = 0; i < arr.length; i++){

        if(tmp.indexOf(arr[i]) === -1){
            tmp.push(arr[i]);
        }
        
    }
    return tmp;
}

console.log(unique(arr));
