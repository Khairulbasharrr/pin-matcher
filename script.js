function createPin() {

 document.getElementById("showPin").value =Math.floor(1000 + Math.random()*9000) ;
 deleteAll.call();

}
function insertNumber(number) {
   var existingValue = document.getElementById("match-pin").value ;
   document.getElementById("match-pin").value = (existingValue + number);
   display.call();
   
}
function deleteAll (){
  
    var submitNumber = document.getElementById("match-pin").value = '';
    display.call();
}
function oneByOne(){
    var submitNumber = document.getElementById("match-pin").value;
    if(submitNumber != ''){
        document.getElementById("match-pin").value =(submitNumber.slice(0,-1));
    }
    display.call();
    
}
function test() {
    
   var generateNumber = document.getElementById('showPin').value;
   var submitNumber = document.getElementById("match-pin").value;
   
   if(submitNumber == generateNumber)
    {
        document.getElementById("success").style.display = "block";
        document.getElementById('fail').style.display = 'none';
    }
else
   {
    document.getElementById("success").style.display = "none";
    document.getElementById('fail').style.display = 'block';

} 
  
}
function display(){

    document.getElementById("success").style.display = "none";
    document.getElementById('fail').style.display = 'none';
}

   
  
