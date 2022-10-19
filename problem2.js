// check palindrome or not
let str="abcd";
let bag="";
for (let i=str.length-1;i>=0;i--){
	bag=bag+str[i]+"";
}
if (str==bag){
	console.log("Palindrome");
}else{
	console.log("Not Palindrome");
}