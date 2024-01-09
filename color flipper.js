var a=document.getElementById('btn').value;
var b=document.getElementById('color').value;
var c=document.getElementById('wrap').value;
var d=["red","blue","green"];
document.getElementById('btn').addEventListener("click",function()
   {
   	 var f=randomcolor();
   	 document.getElementById('wrap').style.background=f;
   	 document.getElementById('color').innerHTML="BACGROUND COLOR IS:"+f;
   }
	);
 function randomcolor()
 {
 	var e=Math.floor(Math.random()*d.length);
 	return d[e];
 }