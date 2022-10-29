/*     15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. 
Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list. */


names = ["umer", "naoman", "arslan", "momin"];
for (i=0; i<names.length; i++){
  console.log(+i+"  "+names[i]+" You are invited for dinner\n"); 
}


console.log("Momin is not comming for dinner");

uname = names.pop();
console.log(uname+" \n")

uname1 = unames.push("Arslan");


console.log(+i+"  "+uname1+" You are invited for dinner\n"); 
