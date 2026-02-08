// Bardaqani Kurditgroup.org


var lang = 1;	


var kurdikey = [
   0x0020, 0x0021, 0x0022, 0x0023, 0x0024, 0x0025, 0x0026, 0x0027,
   0x0029, 0x0028, 0x002A, 0x002B, 0x060c, 0x002D, 0x002E, 0x061F,
   0x0030, 0x0031, 0x0032, 0x0033, 0x0034, 0x0035, 0x0036, 0x0037,
   0x0038, 0x0039, 0x003A, 0x061b, 0x003c, 0x003D, 0x003e, 0x061F,
   0x0040, 0x200c, 0x200C, 0x0686, 0x200c, 0x06cc, 0x06a4, 0x063a,
   0x200c, 0x062d, 0x06af, 0x06a9, 0x06b5, 0x0640, 0x200c, 0x0648,
   0x06c6, 0x200c, 0x0695, 0x0634, 0x200c,  0x639, 0x06c6, 0x200c,
   0x0686, 0x06ce, 0x0698, 0x005d, 0x005c, 0x005b, 0x005e, 0x0640,
   0x20ac, 0x0627, 0x0628, 0x062c, 0x062f, 0x06ce, 0x0641, 0x06af,
   0x0647, 0x0639, 0x0698, 0x0643, 0x0644, 0x0645, 0x0646, 0x06C6,
   0x067e, 0x0642, 0x0631, 0x0633, 0x062a, 0x0626, 0x06a4, 0x0648,
   0x062e, 0x06cc, 0x0632, 0x200c, 0x007C, 0x200c, 0x007E
];

// on Alt+ctrl, switch language
function KKeyDown()
{
   if (window.event.ctrlKey && window.event.altKey) { 
      if (lang == 0) {
         lang = 1;
         window.defaultStatus = "***   Kurdi   ***";
      }
      else {
         lang = 0;
         window.defaultStatus = "***   Latini   ***";
      }
      return false;
   }
   return true;
}

function KKeyPress()
{
   var key = window.event.keyCode;

   // Avoid processing if control or higher than ASCII (i.e., in Arabic Windows)
   if (key < 0x0020 || key >= 0x00FF)
      return;
   //if in Kurdi mode:
   if (lang == 1) {
      if (key == 0x0020 && window.event.shiftKey)
         window.event.keyCode = 0x200C;
      	 
      else 
         window.event.keyCode = kurdikey[key - 0x0020];
   }
   return true;
}


function LangKur (myobj)
{
      // myobj.style.textAlign = "right";
     //  myobj.style.direction = "rtl";
       myobj.focus();
       lang = 1;
       window.defaultStatus = "***   Kurdi   ***";
}


function LangEng (myobj)
{
     //  myobj.style.textAlign = "left";
     //  myobj.style.direction = "ltr";
  
       myobj.focus();
       lang = 0;
       window.defaultStatus = "***   Latini   ***";
}
