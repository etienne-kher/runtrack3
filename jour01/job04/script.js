function bisextile(année)
{
	if(année%4==0)
	{
		if(année%100)
		{
			if(année%400)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		else
		{
			return true;
		}
	}
	else
	{
	 return false;
	}
}
var year1=1996;
var year2=2001;
console.log(bisextile(year1));
console.log(bisextile(year2));
