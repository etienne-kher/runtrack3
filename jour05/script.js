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
		{	
			$('#err').remove();
		}
		else
		{	$('#err').remove();
			$('form').append("<p id ='err'>les mots de passe doivent correspondre</p>");
		}	
	}
	console.log("inscription.php");
	$('#psw').keyup(testmdp);
	$('#repsw').keyup(testmdp);	
	
	//verifier email existant et bon format
	function testmail(email) 
	{
			console.log("test");
			/*
 			
*/
  	}
  	
	$('#email').keydown(function()
		{
			mail=$('#email').val()
			var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 			  if(!regex.test(mail)) 
 			 {
  				console.log(false);
  			 }
  			  else
  			 {
    			console.log(true);
  			 }
		});
	
}

if(con==true)
{

}