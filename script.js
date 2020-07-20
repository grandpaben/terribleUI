var num = 1;
var globalStr = "f1";
function messWithThings()
{
num++;
for(var i = num; i<=11; i++)
{
  var str = "f" + i;
  var pl = (document.getElementById(str).style.top);
  var rawnum = parseInt(pl.substring(0, (pl.length-2)));
  rawnum-=(30-i);
  var att = rawnum + "px";
  document.getElementById(str).style.top = att;
}
globalStr = "f" + num;
}
