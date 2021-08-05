let arr = [
    {
        rudi:0,
        ani:0
    }
]
let rudi = {
    sejarah : 8,
    matematika : 7,
    sosiologi : 6,
    kewarganegraan : 9
}

let ani = {
    sejarah : 5,
    matematika : 8,
    sosiologi : 9,
    kewarganegraan : 6
}

let dataCheck = (rudi,ani) => {

    (rudi >= ani) ? arr[0].rudi++ : arr[0].ani++
}


let run = () => {

    for (let x in rudi) {

        dataCheck(rudi[x],ani[x])
    }

    console.log(arr)
}



run()
