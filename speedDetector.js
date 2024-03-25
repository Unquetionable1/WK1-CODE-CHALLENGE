const prompt=require('prompt-sync')({sigint:true});
const speed=prompt('Enter your speed: ')

 function speedCalc(speed){
    let message;
    if(speed<70){
       return message='Ok';
    } else 
    if(speed>=70){
                points = Math.floor((speed - 70) / 5);
            }
            if(points>12){
               return message='License suspended'
            } else {
                
              return message=`Points:${points}`;
            }
            return message;
}
        
  
   
 console.log(speedCalc(Number(speed)));

