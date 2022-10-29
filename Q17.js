/*   
17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
    and you have space for only two guests.
• Start with your program from Exercise 16. 
    Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. 
    Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. 
    Print your list to make sure you actually have an empty list at the end of your program.


*/


const guestList = ["Naoman", "Arslan", "Umer", "Momin", "Aamir", "Jameel"]; // add name of friends in array
      document.getElementById("myList").innerHTML = guestList.join(" </br> ");
      


//remove guest to the end of your list
    function removeLastGuest() {
      const removeLast = guestList.pop();
      if (guestList.length <= 2) {
        alert("only two guests are left, Dont remove");
        document.getElementById("remainList").innerHTML = JSON.stringify(guestList + " You are still invited for dinner \n")
      }
      else {
        document.getElementById("removeLast").innerHTML = JSON.stringify(removeLast + " has been remove from list")
      }
    }


    function inviteMsg() {
      var msg = "You can only invite 2 guests";
      document.getElementById("msg1").innerHTML = msg;
    }


    function removeAllGuest() {
        const removeLast = guestList.pop();
        if (guestList.length <= 0) {
          alert("All Guest has been removed");
          document.getElementById("empatyList").innerHTML = JSON.stringify(guestList);
        }      
      }



























// const guestList = ["Naoman", "Arslan", "Umer", "Momin", "Aamir", "Jameel"]; // add name of friends in array
// document.getElementById("myList").innerHTML = guestList.join(" </br> ");

// console.log(guestList + "\n");

// console.log("You can invite only two people for dinner");

// //remove guest to the end of your list
// function removeLastGuest() {
//     const removeLast = guestList.pop();
//     if (guestList.length <= 2) {

//         alert("only two guests are left, Dont remove");

//         document.getElementById("remainList").innerHTML = JSON.stringify(guestList + " You are still invited for dinner \n")
            
//     }
//     else {
//         document.getElementById("removeLast").innerHTML = JSON.stringify(removeLast + " has been remove from list")
//     }
    
// };

//     prompt
// }

// //Add one new guest to the beginning of your array.

// // const data2 = data.unshift("farooq");
// // document.getElementById("myList2").innerHTML = JSON.stringify(data);


// // // Add one new guest to the middle of your array.

// // const data3 = data.splice(2, 0, 'Jameel');
// // document.getElementById("myList3").innerHTML = JSON.stringify(data);


// function inviteMsg(){
//     var msg = "You can only invite 2 guests";
//     document.getElementById("msg1").innerHTML = msg;}

// names = ["ali", "raza", "ahmed"];
// names.forEach((name) =>
//   console.log(`hello ${name}! You are invited to dinner at my house tomorrow`)
// );
// console.log("\n");

// console.log("ahmed can't make it");

// names.pop();
// names.push("riz");
// console.log("\n");

// names.forEach((name) =>
//   console.log(`hello ${name}! You are invited to dinner at my house tomorrow`)
// );

// console.log("Found bigger table");
// names.splice(1, 0, "mu");
// names.push("als");

// names.forEach((name) =>
//   console.log(`hello ${name}! You are invited to dinner at my house tomorrow`)
// );
