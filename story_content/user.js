function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6WDJoTKxWgp":
        Script1();
        break;
      case "65vPoOfHwhG":
        Script2();
        break;
      case "6SIVWQhEOnX":
        Script3();
        break;
      case "665z3o2vQdy":
        Script4();
        break;
      case "5eP7Cgyhah0":
        Script5();
        break;
      case "63txcHKpkmz":
        Script6();
        break;
      case "5hr7VWSaP6t":
        Script7();
        break;
      case "5VxvmKbT1R6":
        Script8();
        break;
      case "6V3u6ZlLJ4P":
        Script9();
        break;
      case "6INokS3MBeZ":
        Script10();
        break;
      case "6ChGiSao45F":
        Script11();
        break;
      case "5yWxegfU8js":
        Script12();
        break;
      case "6ibjX7wm1du":
        Script13();
        break;
      case "6cSdbBkY7h0":
        Script14();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script13()
{
  $("#tab-customlink").show();
}

function Script14()
{
  window.print();
}

