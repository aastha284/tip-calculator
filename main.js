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
		var tipAmount = 5;
	}
	else if(btn=="tip10")
	{
		var tipAmount = 10;
	}
	else if(btn=="tip15")
	{
		var tipAmount = 15;
	}
	else if(btn=="tip25")
	{
		var tipAmount = 25;
	}
	else if(btn=="tip50")
	{
		var tipAmount = 50;
	}
	else
	{
		var tipAmount = parseInt(btn);
	}
	var bill= document.querySelector("#bill").value;
	var numberOfPeople =document.querySelector("#people").value;
	if(bill< 0 || num<0 || numberOfPeople<0)
	{
		alert("Please enter the valid inputs");
		resetForm();
	}
	else
	{
		if(numberOfPeople==0)
		{
			nozero();
		}
		else
		{
			cantBeZero.style.display="none";
			var amountPerPerson = parseFloat(bill)/parseFloat(numberOfPeople);
			var tipPerPerson = tipAmount*(1/100)*parseFloat(amountPerPerson);
			bill=parseFloat(tipPerPerson)+parseFloat(amountPerPerson);
			document.getElementById("tipAmount").innerHTML= "$"+tipPerPerson;
			document.getElementById("totalAmount").innerHTML= "$"+bill;
		}
	}
}


function tipforcustom()
{
	var customTip = document.getElementById("custom").value;
	var numberOfPeople = document.getElementById("people").value;
	var bill = document.getElementById("bill").value;
	if(numberOfPeople=="" || bill=="" || bill< 0 || numberOfPeople<0 || customTip<0)
	{
		alert("Please enter the valid inputs");
		resetForm();
	}
	else
	{
		tip(customTip);
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