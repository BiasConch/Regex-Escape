function regex() {
var FILE = SpreadsheetApp.openById("Sheet-ID");
var CONTENT = FILE.getSheetByName("Sheet1");
var counter = 0;
 

  for(var total = 2; total < 500; total = total + 1){
    //checks to see how many lines need to be checked until a null cell is found
      if(IOCValue != ""){
        var IOCValue = CONTENT.getRange("b"+total).getValue();
        counter = counter+1;
        }
      else if(IOCValue == ""){
        total = 500;
        }
      
      }
    

  for(var row = 2; row < counter+1; row = row + 1){
      //iterates through each line that is populated with an IOC
      IOCValue = CONTENT.getRange("b"+row).getValue();
      
      const IOCValueString = IOCValue.toString();
    
      var IOCValueString2 = IOCValueString.replace(/[-[\]{}()*+?./,—_\\^$|#]/g,'\\$&'); 
      //checks for any characters specified to replace in the input globally 
          
    

      var total = CONTENT.getRange("b"+row).setValue(IOCValueString2);
      
    }

}