let run = (data) => {
    let tmp = "";
    for(let i = 0; i<data.length; i++){
        let a = checkVocal(data[i])
        tmp += a

    }

    return tmp

}
let checkVocal = (char) => {
    return char.replace(/[aeiou]/gi,'i');
}


console.log(run('jika input'))
