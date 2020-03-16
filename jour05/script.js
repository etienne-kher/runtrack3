var page = document.location.href ;
var con = page.includes("connexion.php");
var ins = page.includes("inscription.php");

if(ins==true)
{
	function testmdp()
	{
		psw=$("#psw").val();
		repsw=$("#repsw").val();
		if(psw==repsw)
		{	$('#err').remove();
			console.log("oui");
		}
		else
		{	$('#err').remove();
			$('form').append("<p id ='err'>les mots de passe doivent correspondre</p>");
		}	
	}
	console.log("inscription.php");
	$('#psw').keyup(testmdp);
	$('#repsw').keyup(testmdp);	
	
	//algo pour inscription

	//verifier email existant et bon format

	//verif mdp=remdp
	
}

if(con==true)
{

}