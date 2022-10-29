/* 42.	Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by 
adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.   */



function show_magicians(name){
    console.log(name);
}

function make_great(name){
    show_magicians("Great Magician!: "+name);
}

let array = ["Harry Anderson", "David Copperfield", "Doug Henning", "Siegfried and Roy", "Buyenlarge", "Lance Burton"]
for (let i=0; i<array.length; i++){
   
    make_great(array[i]);
};    

