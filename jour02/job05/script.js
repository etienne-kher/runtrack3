//var foot = document.getElementsByTagName("footer");
function footscroll()
{
	var bod = document.documentElement.scrollTop;
	var taillesc = document.documentElement.scrollHeight;
	var taillecl = document.documentElement.clientHeight;
	var pourcent = 250-(bod/(taillesc-taillecl))*250;
	var col =  "rgb("+pourcent+",250,250)";
	//foot.style.backgroundColor="rgb("pourcent",179,113)";
	document.getElementById("footer").style.backgroundColor = col;
}
//foot.style.backgroundColor="rgb(33,179,113)";	
