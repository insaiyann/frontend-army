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
document.getElementById("body").style="background-image:url(',/general1.jpg')";
}
if(i==2)
{
document.getElementById("body").style="background-image:url('./general2.jpg')";
}
if(i==3)
{
document.getElementById("body").style="background-image:url('./general3.jpg')";
}
if(i==4)
{
document.getElementById("body").style="background-image:url('./general4.jpg')";
}
if(i==5)
{
document.getElementById("body").style="background-image:url('./general1.jpg')";
i=0;
}
}
