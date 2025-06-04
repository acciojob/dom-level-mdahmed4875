let e=document.getElementBYId('level');
let ans=0;
while(e!=null){
	level+=1;
	e=e.parentNode;
}
alert("The level of the element is: "+ans);
