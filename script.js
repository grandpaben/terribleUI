var num = 1;
var globalStr = "f1";
console.log(globalStr);

function messWithThings()
{
num++;
for(var i = num; i<=11; i++)
{
  var str = "f" + i;
  var pl = (document.getElementById(str).style.top);
  var rawnum = parseInt(pl.substring(0, (pl.length-2)));
  rawnum-=(30-i);
  console.log(rawnum);
  var att = rawnum + "px";
  document.getElementById(str).style.top = att;
  console.log(document.getElementById(str).style.top);
}

globalStr = "f" + num;
}
