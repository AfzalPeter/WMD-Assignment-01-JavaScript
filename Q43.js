/*  43.	Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names 
and one array with the Great added to each magician’s name.   */



function show_magicians(name){
    console.log(name);
}

function make_great(name){
    newArray = show_magicians("Great Magician!: "+name);
}



let array = ["Harry Anderson", "David Copperfield", "Doug Henning", "Siegfried and Roy", "Buyenlarge", "Lance Burton"]
for (let i=0; i<array.length; i++){
    make_great(array[i]);
}    


for (let i = 0; i < array.length; i++) {
    show_magicians(array[i])
}