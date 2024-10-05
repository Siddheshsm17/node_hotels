// function callback()
// {
//     console.log("now adding numbers for you sidhuuu : ")
// }

// function add(a,b , callback)
// {
//    console.log (a  +  b);
//    callback();
// }

// const prompt = require ("prompt-sync")();
// const a  = parseInt( prompt('enter the value a: '));
// const b = parseInt (prompt('enter the value b: '));

// add(a,b,callback);


const sub=function(m,n,siddhesh)
{
    var ans=m-n;
    console.log("answer is :" +ans);
    siddhesh();
}

sub(5,1,function(){ console.log("callback function is completed ")});