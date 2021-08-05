let data = 72500
let pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 200, 100]
let tmp = data
let jml;
for (let x in pecahan) {


    console.log(pecahan[x])
    console.log(tmp)
    console.log(`-----------`)

    for(let i = 0; i < pecahan.length; i++){
        jml = tmp / pecahan[i]
        tmp = tmp  - (pecahan[i]*jml)

        console.log(tmp)
        console.log(jml)
    }




}

console.log(tmp)
