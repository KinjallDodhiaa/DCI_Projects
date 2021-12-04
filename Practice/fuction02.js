'use strict'

function Message(strMessage){
    console.log(strMessage);
}

function CharCount(input){
    if(input===undefined)
    {console.log('Warning');
    return 0;
    }else return input.length;
}

Message("Welcome");

let Name = "Kinjal";
console.log(CharCount(Name));