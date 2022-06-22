function oneThroughTwenty() {
    let meuRetorno = [];
    let n = 0
    while(n< 20){
        n++
    meuRetorno.push(n);
    }
    return console.log (meuRetorno)
}
oneThroughTwenty()

function evensToTwenty(n) {
    let meuRetorno = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0){
            meuRetorno.push(i)
        }
    }
    return meuRetorno 
}
console.log(evensToTwenty(20))

function oddsToTwenty(n) {
    let meuRetorno = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0){
            meuRetorno.push(i)
        }
    }
    return meuRetorno 
}
console.log(oddsToTwenty(20))

function multiplesOfFive(n) {
    let meuRetorno = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 !== 0){
            meuRetorno.push(i)
        }
    }
    return meuRetorno 
}
console.log(multiplesOfFive(100))