/* 41.	Magicians: Make a array of magician’s names. 
    Pass the array to a function called show_magicians(), 
    which prints the name of each magician in the array.    */



function show_magicians(name){
    console.log("Magician's Name is: "+name);
}

let array = ["Harry Anderson", "David Copperfield", "Doug Henning", "Siegfried and Roy", "Buyenlarge", "Lance Burton"]
for (let i=0; i<array.length; i++){
    show_magicians(array[i])
}    
