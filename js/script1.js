var i=0;
change();
var check=0;
function change()
{
check=setInterval(changebackground,2000);
}
function changebackground()
{
i++;
if(i==1)
{
document.getElementById("body").style="background-image:url(./army8.jpg)";
}
if(i==2)
{
document.getElementById("body").style="background-image:url(./army6.jpg)";
}
if(i==3)
{
document.getElementById("body").style="background-image:url(./army7.jpg)";
}
if(i==4)
{
document.getElementById("body").style="background-image:url(./army9.jpg)";
}
if(i==5)
{
document.getElementById("body").style="background-image:url(./army10.jpg)";
i=0;
}
}
