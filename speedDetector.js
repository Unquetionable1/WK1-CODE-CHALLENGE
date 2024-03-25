const prompt=require('prompt-sync')({sigint:true});

//The user inputs the speed
const speed=prompt('Enter your speed: ')

//FVunction that checks speed
 function speedCalc(speed){

    let message;
    //Checks if speed is greater than 70
    if(speed<70){
      //If less it returns 'ok'
       return message='Ok';
    } else 
    if(speed>=70){
      //if not it takes the current speed and subtract 70 so as to get the value in km/h by which the value exceeds 70km/hr
      //then devides by 5 to get a single point for every 5km/ h that exceed 70km/h
      points = Math.floor((speed - 70) / 5);
    }
    if(points>12){
      return message='License suspended'
   } else {
      return message=`Points:${points}`;
   }
   return message;
}

//Shows the output of speecalc on the console 
 console.log(speedCalc(Number(speed)));

