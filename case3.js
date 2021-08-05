function reverseChar (data) {
    return data.split(' ').map(function(word) {
        return word.split('').reverse().join('');
    }).join(' ');
}

let run = (data) => {
    let rev = reverseChar(data)
    let check = (data === rev) ? 'benar' : 'salah'
    return check
}

console.log(run("kaca"));
console.log(run("kodok"));
