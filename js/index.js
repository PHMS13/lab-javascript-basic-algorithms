//interação 1//
console.log('Enter driver name');

const hacker1 = "Antonio";

console.log('Enter navegator name');

const hacker2 = "leandro";

console.log("The driver's name is",hacker1);

console.log("The navegator's name is",hacker2);

//interação 2//

if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker1.length < hacker2.length) {
    
    console.log(`The navegator has the longest name, it has ${hacker2.length} characters`)
    

} else {

    console.log(`Wow, you both have equally long names,${hacker2.length} characters!`)

};

//interação 3//

const hacker3 = hacker1.toUpperCase().split("").join(" ")

 console.log(hacker3);

 const hacker4 = hacker1.split("").reverse().join(" ")

 console.log(hacker4);

 const hacker7 = [hacker1,hacker2]


 

 if (hacker1 < hacker2){

    console.log("The driver's name goes first.");

 } else if (hacker1 > hacker2){

    console.log("Yo, the navigator name goes first definitely.")

 } else {

    console.log("What?! You both have the same name?")
    
 }