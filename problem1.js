// check prime or not
let N=7;
let count=2;

for(let i=1;i<=N;i++){
	if (N%i==0){
		count++;
	}
}
if (count=2){
	console.log("Prime Number");
}else{
	console.log("Not Prime Number");
}