var cantBeZero = document.querySelector("#num");
cantBeZero.style.display="none";

var form= document.getElementById("calci");
function handleform(e)
{
	e.preventDefault();
}

form.addEventListener('submit', handleform);

function nozero()
{
	var numberOfPeople =document.querySelector("#people").value;
	if(numberOfPeople==0)
	{
		document.getElementById("people").style.borderColor="red";	
		document.getElementById("people").style.border="1px";		
		cantBeZero.style.display="inline-block";
	}
}


function tip(id)
{
	var btn = id;
	if(btn=="tip5")
	{
		var a = 5;
	}
	else if(btn=="tip10")
	{
		var a = 10;
	}
	else if(btn=="tip15")
	{
		var a = 15;
	}
	else if(btn=="tip25")
	{
		var a = 25;
	}
	else if(btn=="tip50")
	{
		var a = 50;
	}
	else
	{
		var a = parseInt(btn);
	}
	var bill= document.querySelector("#bill").value;
	var numberOfPeople =document.querySelector("#people").value;
	if(numberOfPeople==0)
	{
		nozero();
	}
	else
	{
		cantBeZero.style.display="none";
		var n = parseFloat(bill)/parseFloat(numberOfPeople);
		n = a*(1/100)*parseFloat(n);
		bill=parseFloat(bill)+parseFloat(n);
		document.getElementById("tipAmount").innerHTML= "$"+n;
		document.getElementById("totalAmount").innerHTML= "$"+bill;
	}
}


function tipforcustom()
{
	var n = document.getElementById("custom").value;
	var num = document.getElementById("people").value;
	var bill = document.getElementById("bill").value;
	if(num=="" || bill=="")
	{
		alert("Please enter the required inputs");
		resetForm();
	}
	else
	{
		tip(n);
	}	
}



function resetForm()
{
	document.getElementById("bill").value="";
	document.getElementById("people").value="";
	document.getElementById("custom").value="";
	document.getElementById("tipAmount").innerHTML= "$0.00";
	document.getElementById("totalAmount").innerHTML= "$0.00";
	cantBeZero.style.display="none";
}