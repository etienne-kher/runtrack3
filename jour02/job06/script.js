var code="";
document.addEventListener('keydown', function(event)
{
    var clav = event.key;
    code = code + clav;
   // console.log(string);
    if(code == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba")
    {
        var foot = document.createElement('footer');
        var div = document.createElement('div');
        var head = document.createElement('header');
        document.body.prepend(foot);
        document.body.prepend(div);
        document.body.prepend(head);
        head.append("LaPlateforme_");
        div.append("Bien joué vous avez dejoué le code konami , GG !!!");
        foot.append("Copyright 2020 | By Etienne ");
    }
})
