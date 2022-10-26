function clock(){
	var hours=document.getElementById('hours-num');
	var minutes=document.getElementById('mins-num');
	var seconds=document.getElementById('sec-num');
	var am=document.getElementById('am-pm-div');

    var time=new Date();
	var a=time.getHours();
	var b=time.getMinutes();
	var c=time.getSeconds();

	hours.innerHTML=a%12;
	minutes.innerHTML=b;
	seconds.innerHTML=c;






//to set am or pm
hous=new Date().getHours();
var AmOrPm = hous >='12' ? 'PM' : 'AM';
document.getElementById('am-pm-div').innerHTML=AmOrPm;

}

setInterval(clock,1000);




//for dynamic div timings update

function make(){
	var invalue=document.getElementById("dropdown1");
	var valu=invalue.options[invalue.selectedIndex].text;

var invaluee=document.getElementById("dropdown-2");
var valuee=invaluee.options[invaluee.selectedIndex].text;

var invalueee=document.getElementById("dropdown-3");
var valueee=invalueee.options[invalueee.selectedIndex].text;

var invalueeee=document.getElementById("dropdown-4");
var valueeee=invalueeee.options[invalueeee.selectedIndex].text;


	document.getElementById("js-update-div").innerHTML=  "Wake Up Time : "+valu  +"<br><br>"  + "Lunch Time : "+valuee +"<br><br>" +"Nap Time : "+valueee+"<br><br>"+"Night Time : "+valueeee;




document.getElementById("js-update-div").style.visibility="visible";

}







var ht=new Date().getHours();



//FOR MORNING
function sttttt(){
    var iiii=document.getElementById('dropdown1').value;
    if(iiii==ht){
    oj="GOOD MORNING!! WAKE UP !!";
	ojj="GRAB SOME HEALTHY BREAKFAST!!!";

document.getElementById('good-morning-div').innerHTML=oj;
document.getElementById('large-img-div').style.backgroundImage='url(comp.jpg)';
document.getElementById('next-div').innerHTML=ojj;

    }
}






//FOR AFTERNOON
function stttt(){
	var iii=document.getElementById('dropdown-2').value;
	if(iii==ht){
	obj="GOOD AFTERNOON !!";
	obbj="LET'S HAVE SOME LUNCH !!!";

document.getElementById('good-morning-div').innerHTML=obj;
document.getElementById('large-img-div').style.backgroundImage='url(aft.jpg)';
document.getElementById('next-div').innerHTML=obbj;


	}
}





//FOR EVENING
function sttt(){
	var ii=document.getElementById('dropdown-3').value;
if(ii==ht) {
	fg="GOOD EVENING !!";
	ffg="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
document.getElementById('good-morning-div').innerHTML=fg;
document.getElementById('large-img-div').style.backgroundImage='url(ee.jpg)';
document.getElementById('next-div').innerHTML=ffg;
}
}





//FOR NIGHT
function stt(){
	var i=document.getElementById('dropdown-4').value;

if(i==ht){
mg="GOOD NIGHT !!";
mgg="CLOSE YOUR EYES AND GO TO SLEEP";
	document.getElementById('good-morning-div').innerHTML=mg;
document.getElementById('large-img-div').style.backgroundImage='url(mrng.jpg)';
document.getElementById('next-div').innerHTML=mgg;

}
}







function zxc(){


make();
stt();
sttt();
stttt();
sttttt();
}


