var flag = true;

window.onload=ini;

function ini () {

	flag = true;
	var l = $$(".boundary");
	for (var i = l.length - 1; i >= 0; i--) {
		l[i].onmouseover = become_red;
	};

	// for (var i = l.length - 1; i >= 0; i--) {
	// 	l[i].onmouseout = reset;
	// };
	
	var end = $("end");
	end.onmouseover = youwin;

	var start = $("start");
	start.onclick = START;
}

function become_red() {
	var l = $$(".boundary");
	for (var i = l.length - 1; i >= 0; i--) {
		l[i].addClassName("youlose");
	};
	flag = false;
}

function reset() {
	var l = $$(".boundary");
	for (var i = l.length - 1; i >= 0; i--) {
		l[i].removeClassName("youlose");
	};

}

function youwin() {
	if (flag == true) {
		$("status").innerHTML = "you win"
	};
	
}

function START() {
	$("status").innerHTML = "try again"
	reset();
	ini();
}