window.onload=function()
{
  var icon=document.getElementById("icon");
  var iconhide=document.getElementById("iconhide");
  icon.onclick=function()
  {
    if(iconhide.style.display=="none")
    {
      iconhide.style.display="block";
    }
    else
    {
      iconhide.style.display="none";
    }
  }
}