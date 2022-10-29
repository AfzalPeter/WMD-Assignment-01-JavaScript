/*  13.	Your Own Array: Think of your favorite mode of transportation, 
    such as a motorcycle or a car, and make a list that stores several examples. 
    Use your list to print a series of statements about these items, 
    such as “I would like to own a Honda motorcycle.”   */



const fTrans = ["car", "Motocycle", "Jet", "Ship"]; // add name of friends in array
msg = "I would like to own a";
for (i=0; i<fTrans.length; i++)
{
    console.log(msg, fTrans[i]+"\n ");
}


