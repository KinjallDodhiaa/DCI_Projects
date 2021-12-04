function add(n1,n2,myCallBackFunc){
    let sum = n1+n2;
    myCallBackFunc(sum);
}

function multiple(input){
    console.log(input*input);
}

add(2,3,multiple);
console.log('----------------------------');

function rollDie(){
    const roll = Math.floor(Math.random()*6)+1;
    console.log(roll);
}

function callTenTimes(f){
    for(let i=0;i<10;i++){
        f();
    }
}

function callTwice(func){
    func();
    func();

}

callTenTimes(rollDie);
console.log('----------------------------');
callTwice(rollDie);