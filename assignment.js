const prompt = require('prompt-sync')();
// const age=prompt("enter the age");
// console.log(age);

const name=prompt("enter name :");
const price= parseFloat(prompt("enter price :"));
const userinput=prompt(" Is the product in stock? (yes/no):");
const isStock=userinput.toLowerCase()==="yes";

const product={
    name:name,
    price:price,
    isStock:isStock
};

console.log("product details",product);    


// const name_list=['omar', 'sahil' ] ;
// const guest_name=prompt("enter the name :") ; 
// const 
// let  found =false ; 

// for(var i=0;i<2;i++) 

// {
//     if(guest_name==name_list[i])
//     {
//         console.log("yess");
//         found =true;
//         break
//     }
// }
//  if(!found) console.log("noo");



