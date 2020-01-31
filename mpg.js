/*
    JavaScript Programming Exercise 5
    Control Flow and Loops
    MPG Exercise
*/
let again='y';
let miles =0.0;
let gallons = 0.0;
let mpg = 0.0;
let calculateMsg;

do{
    miles = prompt('Enter the number of miles travelled:')
    miles = parseFloat(miles);
    gallons = prompt('Emter the number of galons used:');
    gallons = parseFloat(gallons);
    if(!isNaN(miles) && miles >0 && !isNaN(gallons)&&gallons >0){
        //all good
        mpg =miles/gallons;
        mpg = parseInt(mpg); // round to whole number
        calculateMsg = 
        `<p>MPG: miles travelled:<strong>${miles}</strong>miles 
            Gallons consumed:<strong>${gallons}</strong> 
            Consumption rate: <strong>${mpg}</strong>miles/gallon</strong></p>`
    }else{
        //all good
        calculateMsg=`<p style="color:red;"> One or more invalid inputs.</p>`;
       
    }
    again = prompt('All set? Print to HTML page','y');
   
}while (again!='y');
