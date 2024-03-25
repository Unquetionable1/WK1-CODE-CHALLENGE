const speed =prompt('What\'s your speed?');
 function speedCalc(speed){
    if(speed<70){
        return 'Ok'
    } else if(speed>=70){
        return pointsCalc= function(speed){
            let speed = 0;
            if(speed>=70){
                points = Math.floor((speed - 70) / 5);
            }
            if(points>12){
                return 'License suspended'
            } else {
                return `Points:${points}`;
            }
        }
    }
 }
