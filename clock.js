function clock(){
	var hours=document.getElementById('hours-num');
	var minutes=document.getElementById('mins-num');
	var seconds=document.getElementById('sec-num');
	//var am=document.getElementById('am-pm-div');

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



// const tim= new Date().getHours();

// //FOR MORNING
// if (tim >'4' && tim<='11')
// {
// 	oj="GOOD MORNING!! WAKE UP !!";
// 	ojj="GRAB SOME HEALTHY BREAKFAST!!!";

// document.getElementById('good-morning-div').innerHTML=oj;
// document.getElementById('large-img-div').style.backgroundImage='url(comp.jpg)';
// document.getElementById('next-div').innerHTML=ojj;

// }






// //FOR AFTERNOON

// let obj, obbj;
// if (tim >'11' && tim<='16')
// {
// 	obj="GOOD AFTERNOON !!";
// 	obbj="LET'S HAVE SOME LUNCH !!!";

// document.getElementById('good-morning-div').innerHTML=obj;
// document.getElementById('large-img-div').style.backgroundImage='url(aft.jpg)';
// document.getElementById('next-div').innerHTML=obbj;

// }





// //FOR EVENING
// else if(tim>'16' && tim<='19'  )
// {
// 		fg="GOOD EVENING !!";
// 		ffg="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
// document.getElementById('good-morning-div').innerHTML=fg;
// document.getElementById('large-img-div').style.backgroundImage='url(ee.jpg)';
// document.getElementById('next-div').innerHTML=ffg;
// }




// //FOR NIGHT
// else if( tim>'19' || tim<='4')
// {
// 	mg="GOOD NIGHT !!";
// 	mgg="CLOSE YOUR EYES AND GO TO SLEEP";
// document.getElementById('good-morning-div').innerHTML=mg;
// document.getElementById('large-img-div').style.backgroundImage='url(mrng.jpg)';
// document.getElementById('next-div').innerHTML=mgg;

// }






}

setInterval(clock,1000);



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











<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="clock.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bebas+Neue&family=Bowlby+One+SC&family=Courgette&family=Fredoka+One&family=Paytone+One&family=Quicksand:wght@300&family=Righteous&display=swap" rel="stylesheet">




<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bebas+Neue&family=Bowlby+One+SC&family=Courgette&family=Fredoka+One&family=Paytone+One&family=Quicksand:wght@300&family=Righteous&family=Roboto:wght@300;400&display=swap" rel="stylesheet">


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@100&family=Water+Brush&display=swap" rel="stylesheet">



<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap" rel="stylesheet">


	<title>Clock Project</title>
</head>
<body>
<div id="div1">
	<div id="clock-img-div">
		<img class="cl-img" src="cl.png">
	</div>
<div class="arrow-right"></div>
<div class="message-box-2">The message and Image will change according to the time</div>
	<div class="set">

		<div class="wake-up-time">
			<div class="wake-up-time-img"><img src="wa.jpg"></div>
			<div class="wake-up-time-text">Set wake up time</div>
			<select id="dropdown1">
			<pre><option>--- Default  ---</option></pre>
				<option value="1">1 AM -  2 AM</option>
				<option value="2">2 AM -  3 AM</option>
				<option value="3">3 AM -  4 AM</option>
				<option value="4">4 AM -  5 AM</option>
				<option value="5">5 AM -  6 AM</option>
				<option value="6">6 AM -  7 AM</option>
				<option value="7">7 AM -  8 AM</option>
				<option value="8">8 AM -  9 AM</option>
				<option value="9">9 AM -  10 AM</option>
			    <option value="10">10 AM-  11 AM</option>
			    <option value="11">11 AM-  12 PM</option>
                <option value="12">12 PM -  1 PM</option>
                <option value="13">1 PM -  2 PM</option>
                <option value="14">2 PM -  3 PM</option>
                <option value="15">3 PM -  4 PM</option>
                <option value="16">4 PM -  5 PM</option>
				<option value="17">5 PM -  6 PM</option>
				<option value="18">6 PM -  7 PM</option>
				<option value="19">7 PM -  8 PM</option>
				<option value="20">8 PM -  9 PM</option>
				<option value="21"> 9 PM -  10 PM</option>
				<option value="22">10 PM-  11 PM</option>
				<option value="23">11 PM-  12 AM</option>
				<option value="24">12 AM-  1 AM</option>
			</select>
		</div>
		<div class="border1"></div>

		<div class="lunch-time">
		<div class="lunch-time-img"><img src="lu.jpg"></div>
		<div class="lunch-time-text">Set lunch time</div>
		<select id="dropdown-2">
			<option>--- Default ---</option>
				<option value="1">1 AM -  2 AM</option>
				<option value="2">2 AM -  3 AM</option>
				<option value="3">3 AM -  4 AM</option>
				<option value="4">4 AM -  5 AM</option>
				<option value="5">5 AM -  6 AM</option>
				<option value="6">6 AM -  7 AM</option>
				<option value="7">7 AM -  8 AM</option>
				<option value="8">8 AM -  9 AM</option>
				<option value="9">9 AM -  10 AM</option>
			    <option value="10">10 AM-  11 AM</option>
			    <option value="11">11 AM-  12 PM</option>
                <option value="12">12 PM -  1 PM</option>
                <option value="13">1 PM -  2 PM</option>
                <option value="14">2 PM -  3 PM</option>
                <option value="15">3 PM -  4 PM</option>
                <option value="16">4 PM -  5 PM</option>
				<option value="17">5 PM -  6 PM</option>
				<option value="18">6 PM -  7 PM</option>
				<option value="19">7 PM -  8 PM</option>
				<option value="20">8 PM -  9 PM</option>
				<option value="21"> 9 PM -  10 PM</option>
				<option value="22">10 PM-  11 PM</option>
				<option value="23">11 PM-  12 AM</option>
				<option value="24">12 AM-  1 AM</option>
			</select>
	   </div>
	   <div class="border2"></div>



		<div class="nap-time">
		<div class="nap-time-img"><img src="nap.jpg"></div>
		<div class="nap-time-text">Set nap time</div>
		<select id="dropdown-3">
						<option>--- Default ---</option>
			<option value="1">1 AM -  2 AM</option>
				<option value="2">2 AM -  3 AM</option>
				<option value="3">3 AM -  4 AM</option>
				<option value="4">4 AM -  5 AM</option>
				<option value="5">5 AM -  6 AM</option>
				<option value="6">6 AM -  7 AM</option>
				<option value="7">7 AM -  8 AM</option>
				<option value="8">8 AM -  9 AM</option>
				<option value="9">9 AM -  10 AM</option>
			    <option value="10">10 AM-  11 AM</option>
			    <option value="11">11 AM-  12 PM</option>
                <option value="12">12 PM -  1 PM</option>
                <option value="13">1 PM -  2 PM</option>
                <option value="14">2 PM -  3 PM</option>
                <option value="15">3 PM -  4 PM</option>
                <option value="16">4 PM -  5 PM</option>
				<option value="17">5 PM -  6 PM</option>
				<option value="18">6 PM -  7 PM</option>
				<option value="19">7 PM -  8 PM</option>
				<option value="20">8 PM -  9 PM</option>
				<option value="21"> 9 PM -  10 PM</option>
				<option value="22">10 PM-  11 PM</option>
				<option value="23">11 PM-  12 AM</option>
				<option value="24">12 AM-  1 AM</option>
			</select>
	</div>
   <div class="border3"></div>
		
		<div class="night-time">
		<div class="night-time-img"><img src="nig.jpg" height="43px" width="45px"></div>
		<div class="night-time-text">Set night time</div>
		<select id="dropdown-4">
						<option>--- Default ---</option>
		<option value="1">1 AM -  2 AM</option>
				<option value="2">2 AM -  3 AM</option>
				<option value="3">3 AM -  4 AM</option>
				<option value="4">4 AM -  5 AM</option>
				<option value="5">5 AM -  6 AM</option>
				<option value="6">6 AM -  7 AM</option>
				<option value="7">7 AM -  8 AM</option>
				<option value="8">8 AM -  9 AM</option>
				<option value="9">9 AM -  10 AM</option>
			    <option value="10">10 AM-  11 AM</option>
			    <option value="11">11 AM-  12 PM</option>
                <option value="12">12 PM -  1 PM</option>
                <option value="13">1 PM -  2 PM</option>
                <option value="14">2 PM -  3 PM</option>
                <option value="15">3 PM -  4 PM</option>
                <option value="16">4 PM -  5 PM</option>
				<option value="17">5 PM -  6 PM</option>
				<option value="18">6 PM -  7 PM</option>
				<option value="19">7 PM -  8 PM</option>
				<option value="20">8 PM -  9 PM</option>
				<option value="21"> 9 PM -  10 PM</option>
				<option value="22">10 PM-  11 PM</option>
				<option value="23">11 PM-  12 AM</option>
				<option value="24">12 AM-  1 AM</option>
			</select>
	</div>

	</div>
	<div id="good-morning-div">GOOD MORNING!! WAKE UP !!</div>

<button id="set-alarm-div" onclick="zxc()" >Set Alarm</button>

<div id="js-update-div"></div>

</div>
	<div class="arrow-up"></div>
<div class="message-box-1">Time will be updated here after clicking on "Set Alarm"</div>








<div id="div2">
	<div class="time-clock-div">
		<div class="main-div-for-clock">
			<div id="time-text-div">TIME</div>
			<div id="space-div-1"></div>

			<div id="hours-div">
				<div id="hours-num">00</div>
			    <div id="hours-text">hours</div>
			</div>

			<div id="dots-div-1">:</div>

			<div id="minutes-div">
				<div id="mins-num">00</div>
			    <div id="mins-text">mins</div>
		    </div>

			<div id="dots-div-2">:</div>

			<div id="seconds-div">
				<div id="sec-num">00</div>
			<div id="sec-text">secs</div>
		</div>

			<div id="space-div-2"></div>
			<div id="am-pm-div"></div>
		</div>
	</div>
		<div class="inside-div-1"></div>
			<div class="inside-div-2"></div>
	
	<div id="next-div"></div>
	<div id="large-img-div"></div>




</div>
<div class="arrow-pointed"></div>
<div class="arrow-right" id="arrow-pointed-triangle"></div>

</body>
<script type="text/javascript" src="clock.js">
	
</script>
</html>
