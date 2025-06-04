let e=document.getElementById('level');
let ans=0;
while(e){
	ans+=1;
	e=e.parentNode;
}
alert("The level of the element is: "+ans);
