// deklaracja zmiennych po id

var pumpSwitch = document.getElementById("myonoffswitch");
var pumpState = document.getElementById("myonoffswitch-2");

var heatSwitch = document.getElementById("myonoffswitch-3");
var heatState = document.getElementById("myonoffswitch-4");

var lightSwitch = document.getElementById("myonoffswitch-5");
var lightState = document.getElementById("myonoffswitch-6");


//  pumpSwitch ---------------------------------------


   function pumpSwitchOnOff() 
  {
       pumpSwitch_text = pumpSwitch.value;
     if (pumpSwitch_text=="AUTO")
     {
       ajaxLoad('pumpSwitchAuto'); 
     }
     else
     {
       ajaxLoad('pumpSwitchManu');
       pumpSwitch_text = "MANU";
     }
  }

  function pumpStateOnOff() 
  {
       pumpState_text = pumpState.value;
     if (pumpSwitch_text=="ON")
     {
       ajaxLoad('pumpSwitchON'); 
     }
     else
     {
       ajaxLoad('pumpSwitchOff');
       pumpSwitch_text = "OFF";
     }
  }

  // heatSwitch --------------------------------------

  function heatSwitchOnOff() 
  {
       heatSwitch_text = heatSwitch.value;
     if (heatSwitch_text=="Auto")
     {
       ajaxLoad('heatSwitchAuto'); 
     }
     else
     {
       ajaxLoad('heatSwitchManu');
       pumpSwitch_text = "MANU";
     }
  }

  function heatStateOnOff() 
  {
       heatState_text = heatState.value;
     if (heatSwitch_text=="ON")
     {
       ajaxLoad('heatSwitchON'); 
     }
     else
     {
       ajaxLoad('heatSwitchOff');
       pumpSwitch_text = "OFF";
     }
  }

  //  light ----------------------------------

  function lightSwitchOnOff() 
  {
    lightSwitch_text = lightSwitch.value;
     if (lightSwitch_text=="Auto")
     {
       ajaxLoad('lightSwitchAuto'); 
     }
     else
     {
       ajaxLoad('lightSwitchManu');
       pumpSwitch_text = "MANU";
     }
  }

  function lightStateOnOff() 
  {
       lightState_text = lightState.value;
     if (lightSwitch_text=="ON")
     {
       ajaxLoad('lightSwitchON'); 
     }
     else
     {
       ajaxLoad('lightSwitchOff');
       pumpSwitch_text = "OFF";
     }
  }



var ajaxRequest = null;
if (window.XMLHttpRequest)  { ajaxRequest =new XMLHttpRequest(); }
else                        { ajaxRequest =new ActiveXObject("Microsoft.XMLHTTP"); }
 


function ajaxLoad(ajaxURL)
{
  if(!ajaxRequest){ alert("AJAX is not supported."); return; }
 
  ajaxRequest.open("GET",ajaxURL,true);
  ajaxRequest.onreadystatechange = function()
  {
    if(ajaxRequest.readyState == 4 && ajaxRequest.status==200)
    {
      var ajaxResult = ajaxRequest.responseText;
    }
  }
  ajaxRequest.send();
}