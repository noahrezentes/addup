function add() {
	var aA = document.getElementById("a").value;
	var bB = document.getElementById("b").value;
	var cC = document.getElementById("c").value;
	var dD = document.getElementById("d").value;
	var eE = document.getElementById("e").value;
	var fF = document.getElementById("f").value;
	var gG = document.getElementById("g").value;
	var ans = +aA + +bB + +cC + +dD + +eE + +fF + +gG;
	document.getElementById("disp").innerHTML = ans;
}

function clearAll() {
	var clrAns = 0;
	document.getElementById("disp").innerHTML = clrAns;
	document.getElementById('a').value='';
	document.getElementById('b').value='';
	document.getElementById('c').value='';
	document.getElementById('d').value='';
	document.getElementById('e').value='';
	document.getElementById('f').value='';
	document.getElementById('g').value='';
}
